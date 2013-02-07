---
comments: true
date: 2008-02-29 16:54:56
layout: post
slug: vmware-tools-on-ubuntu-gutsy
title: Vmware Tools on Ubuntu Gutsy
wordpress_id: 183
categories:
- Geek
- General
---

When installing Vmware tools on Ubuntu Gutsy (7.10), either after a fresh install or an upgrade, you'll notice that your networking will either be broken and/or you'll see a device named 'eth1' which is using the kernel module 'pcnet32'. Pcnet32 will work as a virtual nic, however you'll suffer serious performance degradations.

There are two ways to fix this. One is the right way (the permanent way) and the other is the wrong way.

The right way (and the only way I'll show you)


    cd /etc/initramfs-tools/
    sudo echo vmxnet >> modules
    sudo update-initramfs -u


What this will do is force your initramfs image - which is loaded at boot - to contain the vmxnet module, which is the one you really want to be running. You may still notice pcnet32 when you run `lsmod`, however you can freely unload it - it's not being used by anything.
