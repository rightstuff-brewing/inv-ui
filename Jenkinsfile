podTemplate(cloud: 'local cluster', label: 'node-k8s', containers: [
    containerTemplate(
        name: 'node',
        image: 'node:8-alpine',
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
                sh 'apk update'
                sh 'npm install -g @angular/cli'
            }

            stage('Install dependencies') {
                sh 'npm install'
            }

            stage('Build dev') {
                sh 'ng build'
            }

            stage('Build prod') {
                sh 'ng build -prod'
            }

            stage('Build docker') {
                sh 'docker build -t rightstuff-brewing/inv-ui .'
            }
        }
    }
}