---
comments: true
date: 2009-04-22 10:40:55
layout: post
slug: url-shortener-statistics-on-twitter
title: URL Shortener Statistics on Twitter
wordpress_id: 323
categories:
- Analysis
- Development
- Geek
- General
- howto
- Twitter
---

URL Shortening services have gotten a lot of attention because of Twitter. The reason is that most significant links on the internet are longer than 140 characters and that doesn't leave you any room to actually say anything when you tweet. Twitter will shorten some URL's for you using TinyURL, but what about all of the other services? What's the state of the URL shortening service world on Twitter?

Of course, the best people to answer this question is Twitter themselves, but since they haven't published anything, and I doubt they're interested in spending time answering my almost academic question I decided to write a quick app to get the stats myself.

The Twitter API is gorgeous. I mean. It's simple, easy to use, and it's fast. I grabbed a list of all the popular URL shortening services from a few locations, cross-referenced them and came up with 36 "popular" services. The actual number of URL shorteners is pretty incredible. (Some of them even have long names like "shortna.me" WTF are you thinking?)

The process is simple - Search for the urls of the shortening services using the search API, then count how many hits you get. Repeat every 30 seconds or so. (There are other nuances - look at the [code](http://github.com/Trevoro/urihz/tree/master)).  This sampling was done over a 3 hour period on Wednesday April 22nd between the hours of 8AM and 11AM Pacific.

**Results**

[caption id="attachment_324" align="aligncenter" width="417" caption="Twitter URL Shortening Statistics - April 22 2009"]![Twitter URL Shortening Statistics - April 22 2009](http://trevoro.ca/blog/wp-content/uploads/2009/04/picture-1.png)[/caption]

**Issues**

You can only return 100 search results at a time, which means if you see 100 results for your term, there are probably way more of them. The only way to get around this would be to search more frequently for that specific term. I tried doing that and was quickly throttled by Twitter. Suffice to say, TinyURL is still the dominant force here, but probably because of their Twitter integration. This really throws off the numbers. There's a fine line between searching too often, and getting accurate results. Tests in the middle of the night showed that TinyURL had about 30% of the URL Shortening Service market on Twitter. **I'm 99% positive that TinyURL numbers are way higher.**

**Things to do**

Optimize the searching algorithm so it displays more accurate results.

Record the time, and see statistics over the course of hours, days, weeks. I can tell you off the top of my head that TinyURL usage is high all times of the day, where as bit.ly usage is pretty much a "waking hours" service, as most others.

Better Reporting

**GitHub**

The scripts are on GitHub. Go bananas. [http://github.com/Trevoro/urihz/tree/master](http://github.com/Trevoro/urihz/tree/master)
