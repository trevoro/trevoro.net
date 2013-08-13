---
layout: post
hidden: true
title: Introducing Slipway
slug: Slipway is an easy to use PaaS for Single Page Webapps
---

    $ grunt deploy

### Why not just deploy straight to S3?

We found that the little things like roll backs, asset versioning, CDNs,
version management, and setting up webservers a bit tedious. Github Pages is
great for rendered pages, but we wanted a little more flexibility. 

Slipway was designed to deploy webapps in a way that was reliable, fast, and fun.

### Build & Deploy

When you trigger a deploy, Slipway will do a `git pull` against your repository
then kick off a build in a __root safe__ build environment. This means you can
__run any plugins or code you want__. After your build is complete you can check
it out at a unique URL then switch your production version to the new build. 

### Works with Grunt & Bower

Yeoman, Grunt, and Bower are a killer combo for managing your webapps.
Slipway integrates with that existing toolchain. Any Yeoman generated project
will work with Slipway 'out of the box.'

    $ npm install --save slipway-grunt
    
### Features We're Working On

 * SSL Certificates 
 * CNAMES
 * CDN support (CloudFlare & CloudFront)
 * Continuous Integration & Build Testing
 * Integrated Error & Performance Monitoring (Caliper.io)
