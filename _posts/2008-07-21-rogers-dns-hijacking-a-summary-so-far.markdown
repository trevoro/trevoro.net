---
comments: true
date: 2008-07-21 12:34:58
layout: post
slug: rogers-dns-hijacking-a-summary-so-far
title: Rogers DNS Hijacking - A Summary So Far
wordpress_id: 268
categories:
- Geek
- wtf
tags:
- dns
- Geek
- hijack
- isp
- netneutrality
- rogers
---

Over the last few weeks we've seen Rogers pull some incredible stunts. Between the [iPhone](http://ca.reuters.com/article/technologyNews/idCAN2730789320080628), [Data Plans](http://www.nowpublic.com/tech-biz/rogers-tries-save-iphone-launch-6gb-30-data-rate), and [Funny Teaser Campaigns](http://thisyear.ca/2008/06/10/rogers-lame-iphone-teaser/), Rogers has managed to get quite a bit of pie on its face. Nothing trumps that however as much as the recent reports that Rogers is redirecting invalid domain names to their own search page with custom advertisements. There's a lot of confusion about what this is and how it works so I thought I'd summarize some of it here so that we can clear it up.

Rogers is [redirecting traffic](http://arstechnica.com/news.ars/post/20080720-rogers-latest-isp-to-help-customers-with-dns-redirects.html) from invalid domains to its own search page. This doesn't involve deep packet inspection, it simply means they've configured their DNS servers so that if you mis-spell the domain name in your browsers address bar you'll go to a different site. DNS is a service that all ISP's will run, and for the non-technical folk the process goes a little something like this (and for the technical please disregard my brushing over of the issue)

Every computer on the internet has a [number](http://whatismyip.com/), from 1-4 billion or so. When you type an address into your address bar and hit 'go' your computer will say "Do I know where that is already?" and if it doesn't, it will ask a different computer, or DNS (Domain Name Server) for the number of the computer you want to visit. Every single time you type an address into your browser or click on a link this is what happens. For more information on how DNS really works go [here](www.howstuffworks.com/dns.htm) (beginner), [here](http://en.wikipedia.org/wiki/Domain_Name_System) (intermediate) or [here](http://www.dns.net/dnsrd/rfc/) (youalreadyknow).

Now, what normally happens when you type an invalid or non-existant domain name into your browser, the DNS server will return a special code that says 'Theres no answer for this name', and you just get a notification in your browser. Type in "[http://example.co](http://example.co)" using Firefox and you'll get something that looks like this:

[![](http://trevoro.ca/blog/wp-content/uploads/2008/07/domannotfound-300x148.png)](http://example.co)

This is how DNS works, and how the browser is setup to respond to the message that says 'Theres no answer'. Clear as mud? Lets move on.

The DNS servers that Rogers operates are doing something special. When your computer asks where 'example.co' is, the server won't respond back saying 'Theres no answer', but will actually give you the answer containing the name of a server that belongs to Rogers. It will also do something speecial - It will build a page for you that contains links based on keywords of your domain. So if you typed in 'search.example.co' while using a Rogers DNS server, you'll get a page that looks like this:

[![](http://trevoro.ca/blog/wp-content/uploads/2008/07/rogersdnshijack-300x197.png)](http://trevoro.ca/blog/wp-content/uploads/2008/07/rogersdnshijack.png)

This does several things. For one it breaks the way DNS is supposed to work (and coincidentally the way some applications work), and it also violates some concepts regarding Network Neutrality. It represents a way for ISP's to squeeze out as much value from their end-users as possible, and as John over at Blamcast [writes ](http://blamcast.net/articles/rogers-hijacks-dns)it puts ads on invalid subdomains as well. This means that if you type in maill.google.com it will print up an ad on Rogers servers using Yahoo's search feature.

I talked to some iPhone users and while they use Rogers, this doesn't seem to be taking place on the 3G network's DNS servers. I dont have those IP addresses so I can't test it out myself. (Does anyone have that info kicking around?)

A couple companies also do this. A "feature" in IE8 is address-bar searching which is effectively the same thing. When you type an invalid domain into the address bar, it will direct you to Microsoft's search page with results that suggest what you may have meant - and an ad or two of course.

Verizon also did this a few years ago with something called [Site Finder](http://en.wikipedia.org/wiki/Site_Finder) but it ended rather quickly due to criticism.

**Update**: Parkerjon writes with information about an alternative Rogers DNS server, Here is the information

**altdns.rnc.net.cable.rogers.com
64.71.255.202 **
