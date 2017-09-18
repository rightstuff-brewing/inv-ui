def projectName = 'rightstuff-176212';
def imageName = "gcr.io/${projectName}/jenkins-slave:node.master";

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
                    sh 'npm install'
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
                    def baseImageTag = "gcr.io/${projectName}/inv-ui:${env.BRANCH_NAME.replace("/", "-")}"
                    def imageTag = "${baseImageTag}.${env.BUILD_NUMBER}"
                    sh "DOCKER_API_VERSION=1.23 docker build -t ${imageTag} ."
                    sh "DOCKER_API_VERSION=1.23 gcloud docker -- push ${imageTag}"
                    sh "DOCKER_API_VERSION=1.23 docker tag ${imageTag} ${baseImageTag}"
                    sh "DOCKER_API_VERSION=1.23 gcloud docker -- push ${baseImageTag}"
                }
            }
        }
    }
}