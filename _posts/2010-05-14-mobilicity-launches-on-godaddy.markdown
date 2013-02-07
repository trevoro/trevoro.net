---
comments: true
date: 2010-05-14 11:28:27
layout: post
slug: mobilicity-launches-on-godaddy
title: Mobilicity Launches... on GoDaddy
wordpress_id: 463
categories:
- Canada
- Geek
- General
- wtf
tags:
- mobilicity fail
---

[Mobilicity](http://mobilicity.ca), a new mobile phone carrier is launching in Canada on May 15th, 2010. Starting in Toronto, then covering other major cities like Vancouver, and Montreal, the service is competitively priced with unlimited plans for calling and text messages at around $35 dollars (CAD) a month, which is pretty sweet.

After seeing [some buzz](http://search.twitter.com/search?q=mobilicity) on Twitter about Mobilicity, I went to their [website](http://mobilicity.ca), which was so slow I thought I was on dial-up.

This amateur stuff from a Telecom?
No... It can't be.

But after seeing a database connection error (This means shit is broken for all your non-techies) I realized something was really up.


[![](http://trevoro.ca/blog/wp-content/uploads/2010/05/Screen-shot-2010-05-14-at-12.00.05-PM-300x46.png)](http://trevoro.ca/blog/wp-content/uploads/2010/05/Screen-shot-2010-05-14-at-12.00.05-PM.png)


Check this out:

    
    # host www.mobilicity.ca
    www.mobilicity.ca has address 173.201.38.96
    # host 173.201.38.96
    96.38.201.173.in-addr.arpa domain name pointer ip-173-201-38-96.ip.secureserver.net.


Huh? Secureserver.net is....

    
    # whois 173.201.38.96
    
    OrgName:    GoDaddy.com, Inc.
    OrgID:      GODAD
    Address:    14455 N Hayden Road
    Address:    Suite 226
    City:       Scottsdale
    StateProv:  AZ
    PostalCode: 85260
    Country:    US
    
    NetRange:   173.201.0.0 - 173.201.255.255
    CIDR:       173.201.0.0/16
    OriginAS:   AS26496
    NetName:    GO-DADDY-SOFTWARE-INC
    NetHandle:  NET-173-201-0-0-1
    Parent:     NET-173-0-0-0-0
    NetType:    Direct Allocation
    NameServer: CNS1.SECURESERVER.NET
    NameServer: CNS2.SECURESERVER.NET
    NameServer: CNS3.SECURESERVER.NET
    Comment:    Please send abuse complaints to abuse@godaddy.com
    RegDate:    2009-09-18
    Updated:    2009-09-18


Its GoDaddy. A telecom that hosts its website on GoDaddy.

Yikes.
