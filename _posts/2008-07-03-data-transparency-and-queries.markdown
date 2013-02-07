---
comments: true
date: 2008-07-03 10:37:34
layout: post
slug: data-transparency-and-queries
title: Data Transparency and Queries
wordpress_id: 254
categories:
- Geek
---

Yesterday after speaking with [Brendon Wilson](http://www.brendonwilson.com/) I thought more about my old screen scraping scripts I had lying around. Taking a look at them reminded me of a few posts I'd written on the subject of being able to pull data out of services using [semantic stack](http://trevoro.ca/blog/2008/02/17/the-semantic-stack/) technologies, as well as the concept of data transparency. Specifically I scraped a whole bunch of names and profile URL's out of a poplar professional networking website. The whole thing is listed in some nested pages in alphabetical order. It was simply a matter of getting the script to build the list of pages to crawl, then pointing a scraping function at those URLs to pull the names out. The time to get the data was about one hour, and it probably could have been done a lot faster if I'd forked the process of fetching pages into multiple processes but I'm getting off topic.

The real point is that the data is there - out in the open. The real question is how you get that information. What if all I want to know today is how many profiles exist in Facebook, MySpace, or LinkedIn? Shouldn't that be something that you could find out easily? What if I want all the names? You can do it, you just have to effectively download the whole site then scrape it. Kind of a waste of resources but possible. What if I want something less 'Privacy invading'? What if I just want to know the total number of comments on a website? I want my [Sparql](http://jena.sourceforge.net/ARQ/Tutorial/) queries!

Obviously some data will be sensitive. Social networks might not want to give out your information because users will complain, but for data that isn't so "privacy invading" it should be easy to get.
