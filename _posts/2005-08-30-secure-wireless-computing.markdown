---
comments: true
date: 2005-08-30 14:31:31
layout: post
slug: secure-wireless-computing
title: Secure Wireless Computing
wordpress_id: 73
categories:
- Geek
---

For the last week here in the Bay Area I've been 'borrowing' other peoples wireless connections for my own use. It's worked out better than I expected actually. In the city (especially San Francisco) there is definitely no shortage of hotspots that are unsecure, and 99.9% of 'secure' hotspots are using WEP, whose security is easily bypassed given a certain amount of traffic. Despite my ability to easily find internet access, I still hesitate to use them to their full potentail because I'm paranoid, and I know how easy it is to just sit there and sniff wireless traffic. I decided to fix the problem, by running a simple proxy called [tinyproxy](http://tinyproxy.sourceforge.net) on a server I had SSH access to, and forwarding all my web traffic over a secure SSH tunnel. It's working out pretty well. For all the nerds, I'm running tinyproxy on an unpriveleged port, that's only accepting connections locally. The SSH tunnel is forwarded to my laptop on port 8888, and I'm just pointing Firefox to localhost:8888. Flawless. Shared SSH keys make it that much more secure, seeing as nobody will be able to capture any key transactions. I can now feel a little bit better checking my gmail from the middle of but-fuck nowhere. 

-T
