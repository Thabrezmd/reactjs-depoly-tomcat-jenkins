pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/Thabrezmd/reactjs-depoly-tomcat-jenkins.git']]])
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    stage('Stage-9 : Deployment - Deploy a Artifact devops-3.0.0-SNAPSHOT.war file to Tomcat Server') { 
            steps {
                sh 'curl -u thabrez:Tabrez@99 -T target/**.war "http://13.126.3.183:8080/manager/text/deploy?path=/reactjs&update=true"'
            }
        } 
  }
}
