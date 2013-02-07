---
comments: true
date: 2008-10-30 14:09:47
layout: post
slug: how-to-censor-websites-from-yourself
title: How to censor websites from yourself
wordpress_id: 294
categories:
- General
---

Once and awhile I find myself stuck in a very bad habit. I'll refresh the page of a website constantly, because I love the look, or I want to feel totally 'up to speed' on what's happening in an industry. These are terrible habits, because they make you way less productive, and most sites are just huge distractions with lame out of date material (Slashdot being the best example).

What I do to get around my refreshaholicism is to add the site to my RSS reader (Google Reader) then if I still find myself visiting a news site more than once a day, I'll add it to my /etc/hosts file so that the DNS doesn't resolve properly. This lets you continue to view stories via RSS but removes the eye candy - and more importantly makes you stop wasting time. It breaks your habit.

To add a website to your /etc/hosts on a mac or on linux do the following


    [509] trevoro 21:42:49 [ hyperion:~ ]
    # sudo vi /etc/hosts
    Password:


Add the website on the same line that has the 127.0.0.1 entry


    ##
    # Host Database
    #
    # localhost is used to configure the loopback interface
    # when the system is booting.  Do not change this entry.
    ##
    127.0.0.1 localhost hyperion
    255.255.255.255 broadcasthost
    ::1             localhost hyperion
    fe80::1%lo0 localhost
    127.0.0.1 popurls.com www.popurls.com slashdot.org

    Save and exit. Now when you try and access slashdot.org, you'll try hitting your own computer instead. If you want to get complicated you can put up some negative reinforcement page that answers requests for all hosts.
