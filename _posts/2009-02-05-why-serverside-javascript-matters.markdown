---
comments: true
date: 2009-02-05 11:27:01
layout: post
slug: why-serverside-javascript-matters
title: Why Serverside Javascript Matters
wordpress_id: 307
categories:
- cloud
- Geek
- javascript
- sysadmin
tags:
- ssjs javascript hosting economics cloud computing scali
---

[Javascript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) is a popular scripting language that comes embedded in most browsers. It's usually what's responsible for making your browsing experience as rich as it is, and for this reason we tend to categorize it in the realm of client-side development. In fact, running javascript on the server is odd enough for the phrase 'Server-side Javascript' to have been coined in the first place, but it isn't exactly a new idea. Livewire, Netscape's [Enterprise Server](http://blogs.sun.com/jyrivirkki/date/20090113) product included server-side javascript functionality in 1996. But it hasn't really caught on. Writing server-side code in PHP, Ruby, Python and Perl, ASP.Net and Java has been the "way we do things" and javascript remained something you messed around with once you wanted to spoil your users with a  richer experience. Before I explain server-side Javascript adoption, we need one important piece of background information.

**There are economic concepts that dictate how you use services and hosting on the internet.**

Do tell.

Computing is really cheap. Think about all the email that Gmail handles in a day. It's so cheap that advertising can pay for it. But the "Network is the computer" after all, so we have to think about what it takes to get that information in and our of these clusters of cheap computing, and that's the rub. Amazon charges $0.17/gig to get your data out of EC2, which is equivalent to almost two hours of their cheapest computing instance. This is a good scenario if the task you send to your cheap compute cluster can be defined in a very small package, and yields a relatively small result but typical web services and applications don't work this way. The point is: **Its cheaper to move the computing than it is to move the data.**

So what?

This all clicked for me when I messed around with Freebases [development environment](http://dev.freebaseapps.com/), "Acre". Acre is great. It lets you create, edit, and host your applications through a browser. Not only had I been messing around with Acre, but I'd also been toying with the idea of using Freebase as a mechanism for validating and normalizing data. The problem is asking Freebase for a bunch of information on say, "every city on the planet" is pretty expensive. Not only do you incurr a network transfer cost, but you then have to process the information. Not exactly ideal. But what if I could pose a question to an application running at Freebase? What if, instead of pulling out all the information about every movie and creating your own Freebase-based IMDB, you could host it right next to the data source. You get all the benefits of transferring the 'heavy stuff' over the WAN, and the browser gets the good stuff, but only when it asks for it.

**This is why server-side javascript is perfect**

Hosting Ruby, PHP, Python, etc is kind of a pain in the ass. Well its easier than it used to be but it could be a lot better. If I had to choose something relatively lightweight to interface to my data-source and create that rich browsing experience, you'd probably pick Javascript. My initial impression is that depending on your data-source, scaling it would be easy, too. Running computing close (as in LAN close) to the data-set means a few things

1. You can create cheaper mashups

2. You can eliminate all the cruft from your data before it gets sent over the wire

3. You can create nifty applications and ask them short questions that yield short answers but require huge amounts of data to determine

**ZOMG How do I start?**

You'll have to learn javascript, and as a hosting or service operator you'll have to choose an application for running it server-side. There are a few options. Trusty Wikipedia has a [lengthy list](http://en.wikipedia.org/wiki/Server-side_JavaScript) of Server-side Javascript implementations. I'd recommend checking out the following:

[Rhino ](http://www.mozilla.org/rhino/)

[Spidermonkey](http://www.mozilla.org/js/spidermonkey/)

[V8](http://code.google.com/p/v8/)

[AppJet](http://appjet.com/)

[Jaxer](http://www.aptana.com/jaxer/)

-Trevor
