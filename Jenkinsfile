podTemplate(cloud: 'local cluster', label: 'node-k8s', containers: [
    containerTemplate(
        name: 'node',
        image: 'node:8',
        ttyEnabled: true, 
        command: 'cat',
        volumes: [
            hostPathVolume(hostPath: '/var/run/docker.sock', mountPath: '/var/run/docker.sock'), 
            hostPathVolume(hostPath: '/usr/bin/docker', mountPath: '/usr/bin/docker')])
  ]) {
    node('node-k8s') {
        container('node') {
            checkout scm

            stage('Setup Environment') {
                sh 'apt-get update -y'

                // Install tools
                sh 'apt-get install -y apt-transport-https ca-certificates curl software-properties-common'

                // Install docker 
                sh 'curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -'
                sh 'add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"'

                sh 'apt-get update -y'
                sh 'apt-get install -y docker-ce'
            }

            stage('Build dev') {
                sh 'npm run build'
            }

            stage('Test') {
                sh 'npm run test-single'
            }

            stage('Build docker') {
                sh 'docker build -t rightstuff-brewing/inv-ui .'
            }
        }
    }
}