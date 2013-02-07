---
comments: true
date: 2009-03-03 11:51:36
layout: post
slug: every-hosting-company-can-serve-public-datasets
title: 'Every Hosting Company can serve Public Datasets '
wordpress_id: 318
categories:
- General
---

Amazon is doing a really good job of turning [hosting data sets](http://aws.amazon.com/publicdatasets/) into a big marketing win.  A lot of sentiment gets repeated, like "What a friendly environment! They host those data sets for free!". For the most part, I have to agree. Like so many other good ideas its one of those "Well duh" concepts, and it makes sense, not just for Amazon, but for every medium and large sized hosting company.

Why should I host large datasets?

Hosting large sets of data is not only an incentive for people to use your service, but there are economics at play. If more than a couple people use a dataset then you can save money by storing it internally. This is because moving data over the LAN is much much cheaper than the WAN. Storage is even cheaper than LAN traffic. After you add up LAN and Local Storage and compare that to the cost of moving data over the WAN, you save money.

There are public repositories of data sets but they're [fragmented](http://lib.stat.cmu.edu/datasets/), not well documented, and are stored in [many](http://www.thedataweb.org/datasets.html) [different](http://www.datawrangling.com/some-datasets-available-on-the-web) [locations](http://infochimps.org/). Bringing this all under one roof is a fantastic idea.

Something I wish [DataMob](http://datamob.org/) would do is accept, catalog, and store these large datasets so that other large hosting companies can mirror them. One issue here is that to crunch this huge amount of data you need 'on-demand' compute capacity because parsing, crunching and perhaps visualizing 10TB of data can take a few cycles. This is where Amazon really shines. There are also licensing issues at play, which is something I need to spend more time on. Why you'd want to ensure your dataset has to be privately hosted, but can be publicly, anonymously queryable is beyond me.
