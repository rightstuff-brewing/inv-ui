def projectName = 'rightstuff-176212';
def imageName = "gcr.io/${projectName}/jenkins-slave:node.master";
def feSvcName = "inv-frontend"
def baseImageTag = "gcr.io/${projectName}/inv-ui:${env.BRANCH_NAME.replace("/", "-").replace("#", "")}"
def imageTag = "${baseImageTag}.${env.BUILD_NUMBER}"

podTemplate(cloud: 'local cluster', label: 'node-k8s', 
    containers: [containerTemplate(name: 'node', image: imageName, ttyEnabled: true, command: 'cat', alwaysPullImage: true)],
    volumes: [
            hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'),
    ]
) {
    node('node-k8s') {
        container('node') {
            checkout scm

            ansiColor('xterm') {
                stage('Install dependencies') {
                    sh 'npm install -g yarn'
                    sh 'yarn'
                }

                stage('Build') {
                    sh 'npm run build'
                }

                stage('Test') {
                    sh 'CI=true npm run test:ci'
                    sh 'python tools/lcov_cobertura.py test/coverage/lcov.info --base-dir src/ --output test/coverage/coverage.xml'
                    junit 'test/junit.xml'
                    step([$class: 'CoberturaPublisher', 
                        autoUpdateHealth: false,
                        autoUpdateStability: false,
                        coberturaReportFile: 'test/coverage/coverage.xml',
                        failUnhealthy: false,
                        failUnstable: false,
                        maxNumberOfBuilds: 0,
                        onlyStable: false,
                        sourceEncoding: 'ASCII',
                        zoomCoverageChart: false])
                }

                stage('Build docker') {
                    sh "DOCKER_API_VERSION=1.23 docker build -t ${imageTag} ."
                    sh "DOCKER_API_VERSION=1.23 gcloud docker -- push ${imageTag}"
                }

                stage('Deploy') {
                    switch(env.BRANCH_NAME) {
                        // Roll out to canary environment
                        case "canary":
                            sh "sed -i.bak 's#gcr.io/${projectName}/inv-ui:1.0.0#${imageTag}#' ./k8s/canary/*.yaml"
                            sh "kubectl --namespace=production apply -f k8s/services/"
                            sh "kubectl --namespace=production apply -f k8s/canary/"
                            sh "echo http://`kubectl --namespace=production get service/${feSvcName} --output=json | jq -r '.status.loadBalancer.ingress[0].ip'` > ${feSvcName}"
                            break
                        // Roll out to production environment
                        case "master":
                            sh "sed -i.bak 's#gcr.io/${projectName}/inv-ui:1.0.0#${imageTag}#' ./k8s/production/*.yaml"
                            sh "kubectl --namespace=production apply -f k8s/services/"
                            sh "kubectl --namespace=production apply -f k8s/production/"
                            sh "echo http://`kubectl --namespace=production get service/${feSvcName} --output=json | jq -r '.status.loadBalancer.ingress[0].ip'` > ${feSvcName}"
                            break
                        default:
                            // Create namespace if it doesn't exist
                            sh "kubectl get ns ${env.BRANCH_NAME} || kubectl create ns ${env.BRANCH_NAME}"
                            // Don't use public load balancing for development branches
                            sh "sed -i.bak 's#LoadBalancer#ClusterIP#' ./k8s/services/frontend.yaml"
                            sh "sed -i.bak 's#gcr.io/${projectName}/inv-ui:1.0.0#${imageTag}#' ./k8s/develop/*.yaml"
                            sh("kubectl --namespace=${env.BRANCH_NAME} apply -f k8s/services/")
                            sh("kubectl --namespace=${env.BRANCH_NAME} apply -f k8s/develop/")
                            echo 'To access your environment run `kubectl proxy`'
                            echo "Then access your service via http://localhost:8001/api/v1/proxy/namespaces/${env.BRANCH_NAME}/services/${feSvcName}:80/"
                            break
                    }
                }
            }
        }
    }
}