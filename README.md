# Preconfigured Jenkins Image for Docker

See also on [Dockerhub](https://hub.docker.com/r/frumania/docker-jenkins-preconf/)

Based on
* openjdk:8-jdk  
* Jenkins 2.155

### Modifications

* Uses "root" user instead of Jenkins (Dockerfile)
* Configures a default user for Jenkins (Dockerfile & default-user.groovy)
  * User: SAP
  * PW: SAP
* Installs required plugins automatically and skips install wizward (Dockerfile/jenkins.sh)
* Allow Cross Origin HTML/CSS Reports (jenkins.sh)
* Set Executors to 3 (executors.groovy)
* Enable CSRF - required for API access (csrf.groovy)
* Configure Docker Cloud with HOST docker (dockersetup.groovy)
  * Docker Image Jenkins Slave: [frumania/uiveri5-base:latest](https://hub.docker.com/r/frumania/uiveri5-base)
  * Max concurrent slaves set to **3**
  * URL: unix:///var/run/docker.sock
  * Label: myslave

### Plugins:

* git
* matrix-auth
* workflow-aggregator
* docker-workflow
* blueocean
* credentials-binding
* dashboard-view
* nested-view
* modernstatus
* docker-plugin
* ws-cleanup

# Installation

### Download from Dockerhub

> docker pull docker-jenkins-preconf:latest 

### Build locally

Only required if you wanna perform your own changes to the image!  

Via terminal/cmd, execute
> git clone https://github.com/frumania/docker-jenkins-preconf.git  

> cd docker-jenkins-preconf  

> docker build -t docker-jenkins-preconf:latest .


# Run initially

> docker run -d -v /var/run/docker.sock:/var/run/docker.sock -v jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 docker-jenkins-preconf:latest

(Mounts VOLUME jenkins_home (is kept))

# Start/Stop

> docker ps (check container status)  

> docker stop <\ContainerID\>  

> docker start <\ContainerID\>  


# Cleanup

> docker stop <\ContainerID\>  

> docker container rm <\ContainerID\>  

> docker volume ls  

> docker volume rm jenkins_home  

> docker image rm <\ImageID\>  


# Troubleshooting

> docker logs <\ContainerID\>  

> docker exec -it <\ContainerID\> bash  

# Additonal Information

[Dockerhub GIT Integration](https://ask.ericlin.info/post/2017/09/connect-your-repository-to-docker-hub-via-automated-build/)