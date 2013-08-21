---
layout: post
title: Retooling the Web
slug: Native and Single-page Apps are forcing a clear distinction between Data and Clients 
hidden: true
date: 2013-08-15
---

[Single-page apps](http://en.wikipedia.org/wiki/Single-page_application) are an
awesome way to create a rich experience for your web site. You basically send
the entire 'app' to the client on page load, and then subsequent interactions or
changes in the application state occur locally in the brower. When changes need to be retrieved or stored 
on a server, that state can be updated through AJAX or WebSocket requests.

One thing about Single-page apps is that they encourage you to think about your application in very clear terms of 'Data' and 'Client'.
The interaction between the two happens through REST API calls. 
Sometimes you own that API yourself, or you can just use a service like
[Parse](https://parse.io) or [Firebase](https://firebase.com) to store the data
for you. That same separation makes even more sense when you're using the same
API to power native mobile appications. 

So far the conversation about this shift has been focused on mobile.
But if you end up commoditizing the back-end, it's no longer just about mobile: It's about the __entire web__.
Desktop, Tablet, Phone. Everything.

If that distinction continues, then we'll end up with a new developer who will
not even recognize or understand some existing tools. 
Why bother setting up a server to host a static asset?
How will they monitor their apps? Collect errors? Deploy and test new builds?

A lot of people are noticing this trend. [Meteor](http://www.meteor.com) knows this is the 
future of the web, and they're hard at work trying to own the functionality of the *whole stack* themselves.
