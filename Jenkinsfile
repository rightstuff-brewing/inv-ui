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

                stage('Build dev') {
                    sh 'npm run build'
                }

                stage('Test') {
                    sh 'npm run test-single'
                }

                stage('Build docker') {
                    def baseImageTag = "gcr.io/${projectName}/inv-ui:${env.BRANCH_NAME}"
                    def imageTag = "${baseImageTag}.${env.BUILD_NUMBER}"
                    sh 'npm run build-prod'
                    sh "DOCKER_API_VERSION=1.23 docker build -t ${imageTag} ."
                    sh 'DOCKER_API_VERSION=1.23 gcloud docker -- push ${imageTag}'
                }
            }
        }
    }
}