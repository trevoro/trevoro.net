---
comments: true
date: 2008-04-14 16:59:33
layout: post
slug: mod_rails-for-apache
title: Mod_Rails for Apache
wordpress_id: 211
categories:
- Geek
tags:
- Rails Ruby Apache Hosting
---

Phusion released [Mod_Rails](http://www.modrails.com/) and a gem called Passenger today. I watched the [screencast](http://www.phusion.nl/passenger.mov) and was a little blown away at how easy it was to deploy a rails app. The most gorgeous part is because its hosted in Apache you can run other nice modules like Mod_Security, without having to use an additional transparent proxy. There are some [benchmarks](http://izumi.plan99.net/blog/index.php/2008/03/31/benchmark-passenger-mod_rails-vs-mongrel-vs-thin/) out, and it looks like Passenger edges out Mongrel in most tests. This is very exciting news indeed.

Hopefully I can get some benchmarks out sometime soon!
