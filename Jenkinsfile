pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn install'
                }
            }
        }
        stage('Compile') {
            steps {
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn build'
                }
            }
        }
        stage('Build docker dev images') {
            when {
                  branch 'dev'
                }
            steps {
                nodejs(nodeJSInstallationName: 'node:12') {
                    sh 'yarn docker:build:dev'
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
    }
 }
