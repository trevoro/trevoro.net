---
comments: true
date: 2008-02-04 22:38:50
layout: post
slug: pull-to-push-rss-to-xmpp
title: Pull to Push - RSS to XMPP
wordpress_id: 164
categories:
- General
---

You and your friend are standing alone in a room. You're interested in what your friend has to say, but he's normally a pretty quiet guy, so every minute or so you ask him.

"Hey. What's on your mind"

"Nothing", he responds.

This goes on for a few hours until your friend responds with

"I had a great idea for a blog post!"

Now you can start your conversation.

Now its not so bad in this circumstance. There are only two people involved, but it's not what you would consider the normal way to have a conversation. Lets place another 10 people in the room, all talking to each other the same way, and things get noisy very quickly.

RSS has been around for awhile, and with the exception of ATOM its generally regarded as the standard for syndicating content. But RSS is a dirty hack. Constant polling from tons of locations and clients means an unnecessary amount of data and strain on servers, not to mention wasted bandwidth (And we love our precious bandwidth). So rather than have millions of clients poll millions of servers, what's the better solution? We want to push data to clients as it becomes available.

Let's imagine our ideal circumstance.

There are no more pull mechanisms being used online. Every user and website is having its content updated based not on timers and countdowns, but rather changes and actions are being taken based on events that happen somewhere else online. You write a twitter post, but it also updates your Jakiu, your Facebook status and some other set of widgets. Someone writes an article, and rather than the information being syndicated over RSS, the update is pushed directly into the browsers of subscribers all over, or updated on an aggregate website like Popurls.

There's no sense distinguishing between clients. A client can be a browser, an instant messaging system, a daemon on a server somewhere, a website, a widget, a cell phone. The possibilities are literally limitless. What we need to get to this point is a transition mechanism, and the first and best place to start is by creating a service that converts RSS feeds into XMPP style messaging. The most popular clients that are available to end-users are going to be what they have already - Browsers and IM Clients. Firefox plugins would allow you to keep your data in a list. A website would allow you to retrieve your list whenever you wanted, a cell phone to get certain information on the go.

It's interesting and exciting, because it means that mediums where polling mechanisms aren't feasible can start to participate in more connected way, and applications can speak to each other in a more natural fashion.

-T
