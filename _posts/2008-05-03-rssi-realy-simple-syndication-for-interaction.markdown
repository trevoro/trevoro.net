---
comments: true
date: 2008-05-03 12:34:16
layout: post
slug: rssi-realy-simple-syndication-for-interaction
title: RSSI - Realy Simple Syndication for Interaction
wordpress_id: 221
categories:
- Brainstorming
- Geek
- General
- Ideas
tags:
- HID UI Interaction Design
---

After working on a few projects and thinking about how to tie multiple services and interaction processes into one location, I realized that there needs to be a really easy way of publishing the interactions or feedback that is required from a user for a specific application.

The nice thing about RSS is that you can find the information that you may believe is relevant or of interest to you, then have that information centralized in one place. There are websites that do this for you, such as Google Reader, or Popurls (non-customizable but pretty), and there are systems that aggregate social newtorking sites such as FriendFeed, but there isn't a single place I can go to 'push the buttons' for all the applications I interact with in my day to day life. At it's simplest RSSI is a simple boolean question with a custom prompt and application identifier.

Would you like to accept a friend request? Yes

PayPal payment failed, resend? Yes

Your virtualization environment requires upgrading, okay ? No

Things can get more complicated with fields and text values being sent along with the response, or even images sent with the interaction. What if you need to sign up for 10 services at once? Send me all the CAPTCHA images then I'll send you the proper values in text boxes associated with each image.

With regards to implementation, things quickly get heavy, with message bus architectures, authentication and authorization, and a standard framework for describing an interaction with a user and UUID's for interactions. Prompts, type of responses, values of responses, further action, etc.

I think this would be really cool - We've eliminated a lot of the repetitive actions required to get the content, we just need to figure out how to reduce the amount of work required to make things happen.
