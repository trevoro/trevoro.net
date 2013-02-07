---
comments: true
date: 2009-01-16 13:26:56
layout: post
slug: quickly-understanding-freebase
title: Quickly Understanding FreeBase
wordpress_id: 304
categories:
- General
---

I had to explain what [FreeBase](http://freebase.com) was to someone earlier today. Briefly, FreeBase "is an open database of the world’s information. It’s built by the community and for the community – free for anyone to query, contribute to, build applications on top of, or integrate into their websites." After saying it's like a 




  * "Wikipedia for linked lists"


  * "It's a public information exchange"


  * "It will be like a queryable semantic resource for all of the worlds knowledge"



I figured the easiest way to truly understand the power of FreeBase would be to write a quick example. [Jim Pick](http://jimpick.com) and I have talked about getting information in to FreeBase automatically, but here's a super quick ruby example that shows you what you can do.

Let's say you want a list of all of the Computers ever made. (Okay FreeBase doesn't have them all in there yet but it's a cool example).

Let's use Ruby because its dead easy and quick!


    
    gem install freebase



The following code will print up a list of all the computer names


    
    #!/usr/bin/env ruby
    
    require 'rubygems'
    require 'freebase'
    require 'pp'
    
    computers = Freebase::Types::Computer::Computer.find(:all)
    computers.each do |computer|
    puts computer.name
    end
    
    puts computers.length




    
    MacBook Pro 17 inch
    MacBook Pro 15.4 inch
    CM-2
    CM-2a
    CM-200
    CM-5
    CM-5e
    MacBook Pro
    Apple IIe
    Apple IIc
    ...
    ...
    ...
    NeXTcube
    NeXTstation Color Turbo
    NeXTstation Color
    NeXTstation Turbo
    NeXTcube Turbo
    NeXTcube 040
    NeXTcube 030
    Tinkertoy Tic-Tac-Toe Computer
    Z3
    100



Cool, huh? You can access tons of Meta Data, and this is perhaps the most simple example possible but I think it nicely demonstrates _why_ FreeBase is awesome. If you like it, you should check out the [OpenCalais](http://www.opencalais.com/) project by Reuters. Their site is kind of awful but the platform does some very powerful semantic analysis.


