---
comments: true
date: 2008-01-21 14:47:31
layout: post
slug: my-favourite-one-liner
title: My Favourite One Liner
wordpress_id: 162
categories:
- General
---

There are several methods of tracking down disk usage using the 'find' utility, however I really like 'du' for giving me a quick overall sample. Because 'du' prints all the files and their sizes its not very convenient to use on its own, however if you pipe it into another command it completes its job *much* faster. Combined with some other shell tricks and tools you can quickly find the size of folders in your working directory.

    for i in `ls`; do du $i | tail -n 1 ; done | sort -n`




