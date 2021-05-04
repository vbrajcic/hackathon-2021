pipeline {
    agent any

    stages {
        stage('Build docker dev image') {
            when {
                  branch 'dev'
                }
            steps {
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn docker:build:dev'
                }
            }
        }
        stage('Build docker image') {
            when {
                  branch 'master'
                }
            steps {
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn docker:build'
                }
            }
        }
        stage('Run docker-compose') {
            when {
                  branch 'dev'
                }
            steps {
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn version:set:dev'
                    sh 'yarn docker:run:dev'
                }
            }
        }
        stage('Push docker image to Profico AWS ECR') {
            when {
                branch 'master'
            }
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'profico-aws-jenkins', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh "aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 258375240157.dkr.ecr.eu-central-1.amazonaws.com"
                }
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn run docker:push'
                }
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn run docker:push:latest'
                }
            }
        }
    }
 }
