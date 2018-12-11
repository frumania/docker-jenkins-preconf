//https://stackoverflow.com/questions/46659521/getting-404-when-accessing-jenkins-v2-73-1-crumbissuer-rest-api

import hudson.security.csrf.DefaultCrumbIssuer
import jenkins.model.Jenkins

def instance = Jenkins.instance
instance.setCrumbIssuer(new DefaultCrumbIssuer(true))
instance.save()