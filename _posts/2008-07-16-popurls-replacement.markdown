---
comments: true
date: 2008-07-16 19:23:44
layout: post
slug: popurls-replacement
title: Popurls Replacement
wordpress_id: 264
categories:
- Brainstorming
- Geek
---

I've got a subversion repository full of projects that are essentially 'proof of concept' hacks and I'm fucking tired of seeing them in there. Lots of them were ideas I have while doing systems administration. Some of them are goddamned atricous (but functional!) perl programs I wrote for graphing NetFlow statistics, and for visualizing BGP routing. They all worked but I kept them to myself and they were forgotten.

One proof of concept hack I'm going to flesh out is this quick rails app, that with some initial groundwork laid out by [Anis](http://imhotep.koalabs.org/blog/), is essentially another RSS reader. Actually its just an unapologetic Popurls ripoff, but I had a good reason for doing it. I like the popurls layout and the concept: Being able to see all the latest 'buzz' in one spot. The issue is that none of that information is at all important, but for some reason hitting refresh is really pleasurable. Who cares what the people on Digg and Reddit are saying. Fuck you. I want to know more about Cloud Computing, Cooking, and Sailing, and I want to be able to digest that information with a glance - not browse through it site by site, category by category. Bah! (Its still a long way off from what I *really* want but more on that later)

[![](http://trevoro.ca/blog/wp-content/uploads/2008/07/picture-1-300x162.png)](http://trevoro.ca/blog/wp-content/uploads/2008/07/picture-1.png)

Anyway, here's a screenshot. Once I've setup OMPL imports, User Accounts and fixed the Background Processing chunk I'll release version 0.0.1 to the public.

Note: I acknowledge the total uselessness of Slashdot, and I don't read Al Jazzera - I was just seeing if it would work. I dont know what those words are.

**Update**: I've checked some rudimentary code into [GitHub](http://github.com/Trevoro/cloneurls/tree/master).
