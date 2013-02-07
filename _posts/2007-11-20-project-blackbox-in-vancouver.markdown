---
comments: true
date: 2007-11-20 12:41:56
layout: post
slug: project-blackbox-in-vancouver
title: Project Blackbox in Vancouver
wordpress_id: 146
categories:
- General
---

I went to see [Sun](http://sun.com)'s presentation on [Project Blackbox](http://http://www.sun.com/emrkt/blackbox/index.jsp) today at the Westin Bayshore in Vancouver. The presentation consisted of a 20 minute talk / discussion session (too short IMO), as well as a brief tour of the container itself.

For those of you not in the know, Project Blackbox is the internal Sun name for their Data Center in a (20 ft) shipping container.  While the concept isn't entirely new, what's impressive about the concept is the ability to rapidly bring up new computing capacity for lots of different tasks. Here in Vancouver, the Olympic committee should look into something like this, rather than setting up and tearing down temporary computing nodes to run the games in some of their many locations.

However, like in any data center the power requirements are pretty steep, and because the container uses closed-loop water-based cooling, you'd also need to find a chiller unit that can handle your environment.  I did ask what the operating range for the system would be, and while you can run glycol instead of water, the system still has an operating range of -32c to +46c. While thats enough to handle most places, you'd still hesitate to run one outside in Calgary in the winter. It's important to note is that Google has [received](http://arstechnica.com/news.ars/post/20071010-google-patents-datacenter-in-a-shipping-container-ignores-suns-blackbox.html) a [patent](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=7,278,273.PN.&OS=PN/7,278,273&RS=PN/7,278,273) on the concept itself.

[![Blackbox Relief](http://blog.trevoro.ca/wp-content/uploads/2007/11/blackbox.jpg)](http://blog.trevoro.ca/wp-content/uploads/2007/11/blackbox.jpg)

One  solution that I really like but wasn't discussed was disaster relief for circumstances like Hurricane Katrina, where it makes sense to have a distributed communication infrastructure. The Blackbox itself doesn't have any modules for wireless connectivity, so it would be up to any team deploying one to build one on their own. I'd love to see a Blackbox with some satellite uplinks and [wireless mesh](http://freethenet.ca) capabilities.
