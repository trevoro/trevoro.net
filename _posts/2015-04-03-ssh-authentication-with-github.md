---
title: SSH Authentication with Github Teams
date: 2015-04-03
layout: post
---

**tl;dr**: You can authenicate SSH access using Github Teams. 
[Here's the project on Github](http://github.com/trevoro/sshauth).

OpenSSH version 6.6 introduced this nifty config option that makes it possible
to run a command that will produce a users `authorized_keys` file. This 
means that instead of manually managing your `authorized_keys` file on a
server you could just write a command that does it for you. You could collapse
a directory layout so that keys are kept per file, hit a remote endpoint or API,
or something else creative.

For a simple experiement I thought it would be neat to use the Github Teams API
in order to create "groups" that are allowed to SSH into boxes.

The idea is simple enough: Create a team in your Github Organization called
"ssh" or something, and then get all the SSH keys for the users in that team.
This way, when you need to revoke access to a machine you can just remove
someone from the "ssh" group and you're done.

The `AuthorizedKeysCommand` option in SSH is just a first pass. If the keys it
returns are not present for a user, it will continue to use the default
`authorized_keys` file. That means you could have a backup or master key on all
the servers, but individual user keys could still be fetched from Github.

This has a few problems obviously. Github only allows 5000 requests / hour which
means if someone is trying to brute-force your server and you don't have
something like [denyhosts](http://denyhosts.sourceforge.net/ssh_config.html)
installed then you'll burn through your request limit. It also essentially gives
people at Github access to all your servers, so it's not for the paranoid.

All the code is at [github.com/trevoro/sshauth](http://github.com/trevoro/sshauth)

