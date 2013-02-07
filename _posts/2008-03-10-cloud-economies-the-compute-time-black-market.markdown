---
comments: true
date: 2008-03-10 22:06:55
layout: post
slug: cloud-economies-the-compute-time-black-market
title: Cloud Economies - The Compute Time Black Market
wordpress_id: 187
categories:
- Geek
---

Here's an idea. A 'black market' for cloud computing. As with any market there are two parties - Buyers and Sellers. Buyers are looking to have big chunks of data processed, and sellers are looking to make the most use of their environment.
**Buyers**

At night I'd like to render a batch of 100 High-def videos to a DVD image, or perform some statistical analysis on files using a system like Hadoop. As this kind of user, my data isn't time sensitive. It was going to take a few hours to do anyway, so I might as well just have it in the morning. But I don't want to maintain all those server instances, and besides I don't need them all the time.

**Sellers**

I run a website that gets ridiculous amounts of traffic during the day. My environment requires many instances of web and database servers, all of which are being used to about 70% CPU utilization - During the day. At night my servers lie mostly dormant, consuming only as many cycles as required to answer a quick burst in traffic, balanced across my many servers. To offset the costs of running a 24x7 operation I'd like to sell some of my compute time to the highest bidder. "50 GigaFlops - Starting bid is 20$/hour"

Just run a package like Folding@Home or the SETI project and sell access. The system has to support saving state so you could resume a job that carried over the time window. You could then sell your CPU time to offset the cost of hosting your website.

I'm not quite sure how many people out there would need that kind of power, but I'm curious as to what people would pay for grid computing by the hour, and how you might effectively host it on an already existing environment.
