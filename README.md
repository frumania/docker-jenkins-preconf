# Preconfigured Jenkins Image for Docker

[![Build Status](https://travis-ci.org/frumania/docker-jenkins-preconf.svg?branch=master)](https://travis-ci.org/frumania/docker-jenkins-preconf)

[Modified](https://github.com/jenkinsci/docker) Jenkins Image for Docker, that is ready to use and does not require any manual configuration, especially suited for SAP Fiori CI processes.

Based on:
* openjdk:8-jdk  
* Jenkins 2.155

See also on [Dockerhub](https://hub.docker.com/r/frumania/docker-jenkins-preconf/)

## Preconfigured/modified components

* Uses "root" user instead of "jenkins" (Dockerfile)
* Configures a default user for Jenkins (Dockerfile & default-user.groovy)
  * User: SAP
  * PW: SAP
* Installs a given set of plugins (see below) automatically and skips install wizard (Dockerfile/jenkins.sh)
* Allows Cross Origin HTML/CSS Content (jenkins.sh)
* Sets Executors to 3 (executors.groovy)
* Enables CSRF - required for API access (csrf.groovy)
* Configures Docker Cloud with HOST docker (dockersetup.groovy)
  * Docker Image Jenkins Slave: [frumania/uiveri5-base:latest](https://hub.docker.com/r/frumania/uiveri5-base)
  * Max concurrent slaves set to **3**
  * URL: unix:///var/run/docker.sock
  * Label: myslave

### Installed Jenkins Plugins:

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

## Usage

Install/Download Docker from [docker.com](https://www.docker.com/get-started).

### Initialize (first time only)

Via terminal/cmd, execute
```bash
$ docker run -d -v /var/run/docker.sock:/var/run/docker.sock -v jenkins_home:/var/jenkins_home -p 8080:8080 -p 50000:50000 frumania/docker-jenkins-preconf:latest
```

This will map the docker host service for later usage by Jenkins and automatically create a 'jenkins_home' docker volume on the host machine, that will survive the container stop/restart/deletion.

### Run, Start, Stop

Show last active containers
```bash
$ docker ps -a
```

Start Container
```bash
$ docker start <ContainerID\>
```

Access Jenkins
> http://localhost:8080

User: SAP  
PW: SAP 

Stop Container
```bash
$ docker start <ContainerID\>
```

### (Optional) Build locally

Only required, if you would like to **make changes** to the image!  

Via terminal/cmd, execute
```bash
$ git clone https://github.com/frumania/docker-jenkins-preconf.git  
```

```bash
$ cd docker-jenkins-preconf  
```

```bash
$ docker build -t docker-jenkins-preconf:latest .
```

## Change Params

Check out the Dockerfile & .groovy files to manipulate the Jenkins auto-configuration.

## Useful Commands

### Cleanup

Stop container
```bash
$ docker stop <ContainerID\>  
```

Remove container
```bash
$ docker container rm <ContainerID\>  
```

List volumes
```bash
$ docker volume ls  
```

Remove "jenkins_home" volume (all configuration & workspace data will be lost!)
```bash
$ docker volume rm jenkins_home  
```

List images
```bash
$ docker images  
```

Removes docker image
```bash
$ docker image rm <ImageID\>  
```

### Troubleshooting

Display Logs
```bash
$ docker logs <ContainerID\>  
```

Enter container
```bash
$ docker exec -it <ContainerID\> bash  
```

### How to restart Jenkins

> http://localhost:8080/safeRestart. – This will restart Jenkins after the current builds have completed.

> http://localhost:8080/restart – This will force a restart. Builds will not wait to complete.

## Additional Information

[Official Jenkins Docker Image](https://github.com/jenkinsci/docker)

[Dockerhub GIT Integration](https://ask.ericlin.info/post/2017/09/connect-your-repository-to-docker-hub-via-automated-build/)

## Support & Contribution

This project is provided "as-is". There is no guarantee that raised issues will be answered or addressed in future releases.

If you like to contribute, fork the code and/or let me know!

## License

[![Apache 2](https://img.shields.io/badge/license-Apache%202-blue.svg)](./LICENSE.txt)
