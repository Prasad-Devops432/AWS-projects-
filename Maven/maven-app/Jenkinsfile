pipeline {
    agent any

    tools {
        maven 'Maven' // Make sure you configured Maven in Jenkins
    }

    environment {
        DOCKER_IMAGE = 'mywebapp:latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/YOUR_USERNAME/maven-web-app.git'
            }
        }

        stage('Build with Maven') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${DOCKER_IMAGE} ."
            }
        }

        stage('Run Container') {
            steps {
                sh "docker run -d -p 1990:8080 ${DOCKER_IMAGE}"
            }
        }
    }

    post {
        success {
            echo '✅ Application deployed successfully at http://<your-server-ip>:1990'
        }
        failure {
            echo '❌ Build or deployment failed!'
        }
    }
}
