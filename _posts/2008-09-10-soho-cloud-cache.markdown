---
comments: true
date: 2008-09-10 17:44:34
layout: post
slug: soho-cloud-cache
title: SOHO Cloud Cache
wordpress_id: 277
categories:
- Ideas
tags:
- cloud storage soho data cache
---

There have been a lot of startups entering the cloud storage space lately, and quite frankly not too many of them are doing anything interesting. Most business plans revolve around backing up data in S3, building a nice client and doing some version control on files. I know how difficult it is to do that well, but something that can and has been repeated over and over is going to have to really blow the doors off to make any kind of impact - the margins are too thin. There are exceptions. I really like JungleDIsk, and the way its setup. I'm also appreciative of Mozy and their ability to get acquired by one of the larger companies who like to get their chequebook out. Om Malik has written about it and hes not impressed, and I appreciate it when respected peoples opinions mirror my own.

So does anyone in the storage space want to make some extra cash? Here's a free idea.

All those SOHO storage platforms that exist out there, like Drobo and Buffalo - Integrate some cloud computing backup into your system. It goes a little something like this.

I have a terabyte of storage locally for all my music, movies and some other important documents, and its mounted from my computer over the network using regular AFS or CIFS sharing. All you do is setup the storage systems default layout so that it has a 'protected' folder. The protected folder will automatically sync and version all the files to the storage cloud of your choice (probably S3 or Nirvanix). Of course things get tricky as you wouldn't want to drop in a 4gig movie, and have that eat up your network - so there would have to be format and size filters to setup as well. Depending on the % of free space you can also move unused files into the cloud only, but still display their availability locally.

There are a lot of companies and individuals that have these systems in their office for sharing files between users, and the more you synchronize, the more they effectively become SOHO caches.

Update: Jim Pick has told me there's a company named [Wua.la](http://wua.la/en/learn/why) that does something similar to this. Wuala's model seems more like a P2P distributed storage system - Similar to [AllMyData](http://www.allmydata.com/)'s [Tahoe](http://allmydata.org/trac/tahoe) storage system.
