---
layout: post
title: Retooling the Web
slug: Single-page apps and APIs are changing how we're building the web
date: 2013-08-15
---

Just a few years ago, anyone who wanted to get started with building apps needed
to at least work with Linux, database and web servers, and deployment tooling.
Cloud computing introduced some easy to use abstractions to these components in
the form of Infrastructure and Platforms as Services.

Time has pushed abstractions further up the stack, to a point where developers do
not need to know or care about implementation details of the OS, database, or
how the pages are served. Backend services like  [Parse](https://parse.io), 
[Firebase](https://firebase.com), and [Kinvey](http://kinvey.com) are the latest 
components in this trend.

So far the biggest driver behind these BaaS services has been native-mobile. But an __API first
approach leads to clients everywhere__ - including desktop & mobile web.


### Enter the Single-page App

[Single-page apps](http://en.wikipedia.org/wiki/Single-page_application) are an
awesome way to create a rich experience for your web site. You basically send
the entire 'app' to the client on page load, and then subsequent interactions or
changes in the application state occur locally in the browser. When changes need to be retrieved or stored 
on a server, that state can be updated through using an API that either you own,
or that a BaaS provides. 

Because of how they work, Single-page apps encourage & enable you to think in clear 
terms of 'Storage' and 'Client'. Those developers won't ever need to touch the
backend, or the API - just consume it. 

### The Client Server Web

As the distinction between Client and Server continues, we'll end up with two sets of
specialized developers: Those focused on the backend, and those focused on the
client. A __client focused__ web app developer probably won't
need or recognize many of the existing tools and services. An [entirely new set of
tools](http://yeoman.io/) have already been created focused _specifically on modern_ web
apps. 

We're only at the beginning of a major shift in how we build the web.
More and more services are going to focus specifically on this new set of modern
web developers to help them build applications faster.
