---
comments: true
date: 2010-02-12 15:25:57
layout: post
slug: unfuddle-git-backups-how-to-actually-use-them
title: Unfuddle Git Backups - How to Actually Use Them
wordpress_id: 373
categories:
- Development
- Geek
- General
- howto
- sysadmin
---

I really like Unfuddle. The service is easy to use, and there are a lot of great features in there. The documentation is... lacking, however.

One of the things I like is the ability to get a full backup of all my project data, repositories, etc in a single tarball. You can even ask them to keep a copy in your own S3 account.

To create a backup do the following

1) log into Unfuddle and goto the Project page.
2) Click the 'settings' tab then
3) Scroll down till you see link that says 'Request a backup of this project now' link. Click it.

In a few moments you'll get an email, and you'll see a new link on the right hand side of your project settings page that includes a timestamped backup. This backup is a tarball that contains all the GIT repositories and some other files like a backup.xml file which looks like all your tickets.

To use the git dumps run the following


    
    
    mkdir reponame
    cd reponame
    git init
    git fast-import < ../my-unfuddle-backup.git.dmp
    git checkout master
    



You're done!

If you're using subversion repositories there is documentation on how to use these repo backups on Unfuddles website.
