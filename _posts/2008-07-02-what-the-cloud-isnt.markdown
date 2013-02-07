---
comments: true
date: 2008-07-02 11:01:31
layout: post
slug: what-the-cloud-isnt
title: What The Cloud Isn't
wordpress_id: 252
categories:
- cloud
- Geek
- sysadmin
tags:
- cloud computing
---

[Cloudcamp](http://cloudcamp.com) and [Structure 08](http://events.gigaom.com/structure/08/) had a lot of people talking about how the cloud was going to magically solve a lot of problems, and this stemmed from a major issue - we don't really know what the cloud is yet. In its current form the young cloud can't solve certain issues.



## Application Integration



[![Spaghetti Integration. MMmm Spaghetti.](http://trevoro.ca/blog/wp-content/uploads/2008/07/eai1-300x209.jpg)](http://trevoro.ca/blog/wp-content/uploads/2008/07/eai1.jpg)

Just like everyone thought [WSDL](http://www.w3.org/TR/wsdl) would automagically make applications work together, people think the new ubiquitous 'Cloud' will make applications work together. Unless your application was designed from the beginning to talk to and operate with other cloud stacks, then you're going to have an application integration issue on your hands. This is why behemoths like [SAP](http://www.sap.com/canada/solutions/index.epx) exist. Everything is one universal and translatable data format, all controlled by one vendor. If you want to be able to move data, or integrate applications that run in different clouds, then you're going to have to do it the old way. Sit down, translate the data yourself, and emulate it where you can't. Cloud != Application / Data Babelfish



## Eliminate Monitoring



Monitoring is either a dirty word or a multi-million dollar business depending on who you talk to. As a sysadmin for several high-availability environments, I can't stress it enough. Building your application and environment to be redundant is always step number one, but it's useless if you don't know the state of your environment at all times - especially before and after changes. Environment monitoring is like [Behaviour Driven Development](http://behaviour-driven.org/) (see [rspec](http://rspec.info/)) for your application. You know what's supposed to happen, and how things are supposed to look - and if something changes you find out about it. You still need this kind of functionality, and just putting your stuff in the cloud doesn't make issues go away. Cloud != Perfectly Reliable Environment



## Eliminate Lock-in



[![](http://farm3.static.flickr.com/2215/1805590643_f4889b80b5_m.jpg)](http://flickr.com/photos/psd/1805590643/sizes/o/)

Oh boy I said a dirty word. If you write your application for [AppEngine](http://code.google.com/appengine/), then you're using AppEngine until you refactor. Period. The [AppDrop](http://appdrop.com/) application lets you "run AppEngine on EC2" but thats kind of masking the issue. AppDrop is just the AppEngine developer tools running in an AMI - it doesn't do anything like emulate all the necessary infrastructure that makes AppEngine appealing in the first place and the authors acknowledge this. Don't get me wrong - AppEngine is great. Its a highly abstracted environment for writing web applications, but it's not appropriate for a lot of different services. If you want to be able to treat the cloud like you treat a "standard" machine -> LAMP stack then you should be aware of all these factors. Cloud != Universal Magical Computer



## Eliminate Jobs



Sysadmins (and I can say this) are an odd bunch. Most of them treat their environments like children, rearing them to a specific age, but always keeping a watchful eye. Others tend to automate everything necessary in order to move on to the next best thing. The people that horde data, knowledge, useful tools, and expertise will fit right in to closed cultures, but if you want to make it in the new reality, you're going to have to open your mind. The cloud isn't going to make you obsolete unless you try stopping progress. If you didn't have to worry about making system images and building back-ends all day think about all the other amazing things you could do! There are a slew of bad analogies I can use to drive this point home, but I'll use the most cliche: Be a reed in the wind. If you're clinging onto a job because you're easily replaceable, then its just a matter of time. Learn a new skill. Cloud != Massive Layoffs
