# Docker Jenkins image preconf.

* openjdk:8-jdk  
* Jenkins 2.155

### Modifications

* root user instead of jenkins (Dockerfile)
* Jenkins User SAP/SAP (Dockerfile)
* Install plugins automatically + no wizward (Dockerfile/jenkins.sh)
* Allow Cross Origin HTML/CSS Reports (jenkins.sh)
* Executors 3 (executors.groovy)
* Configure Docker Cloud with HOST docker (dockersetup.groovy)
* Enable CSRF (csrf.groovy)

# Plugins:

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

# BUILD

docker build -t docker-jenkins-preconf:latest .

# RUN

docker run -d -v /var/run/docker.sock:/var/run/docker.sock -v jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 docker-jenkins-preconf:latest

(Mounts VOLUME jenkins_home (is kept))

# Start/Stop

docker ps (check container status)
docker stop <containerID>
docker start <containerID>

# CLEANUP

docker stop <containerID>
docker container rm
docker volume ls
docker volume rm jenkins_home

# Troubleshooting

docker logs <containerID>
docker exec -it <containerID> bash