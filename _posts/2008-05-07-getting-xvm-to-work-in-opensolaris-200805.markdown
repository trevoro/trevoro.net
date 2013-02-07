---
comments: true
date: 2008-05-07 02:07:16
layout: post
slug: getting-xvm-to-work-in-opensolaris-200805
title: Getting xVM to work in Opensolaris 2008.05
wordpress_id: 224
categories:
- Geek
- howto
- opensolaris
- sysadmin
---

![os_com_logo.jpg](http://trevoro.ca/blog/wp-content/uploads/2008/05/os_com_logo.jpg)

[OpenSolaris](http://opensolaris.org) 2008.05 came out the other day, and its pretty nice as far as OS's go. One of the things that's great about OpenSolaris is by coupling [Xen](http://xensource.com) with [ZFS](http://opensolaris.org/os/community/zfs/demos/basics/) you can get a really powerful virtualization system.

Unfortunately because of space constraints in a liveCD, you can't squeeze all those 'nice to have' packages into one spot, so you have to download and setup xVM manually. A few things are broken, too so some minor tweaking is required. Here's a list of steps required to get [xVM](http://www.openxvm.org/) setup as a Dom0 in OpenSolaris

1) Become root and install the required packages. This will install the xen.gz kernel, as well as all the other utilities and services necessary for running a Dom0

    
    pkg install SUNWxvmhvm
    pkg install SUNWvirtinst
    pkg install SUNWlibvirt
    pkg install SUNWurlgrabber


2) The package installation doesn't support adding xvm to the default boot.lst in grub. Additionally, OpenSolaris 2008.05 has ZFS as the default filesystem, so a few things have been moved around. Specifically, the boot.lst file used by grub and [bootadm](http://compute.cnr.berkeley.edu/cgi-bin/man-cgi?bootadm+1) has been placed on its own zfs filesystem. Unfortunately it seems that bootadm has been compiled, or at least the distribution has been put together, without the ability to gracefully handle having the boot.lst on a separate partition.

A workaround is to move the /boot/grub/menu.lst file (which has some explanatory text in it) to  /boot/grub/menu.lst-old, and to symlink the /rpool/boot/grub/menu.lst file to /boot/grub/menu.lst.

    
    cd /boot/grub
    mv menu.lst menu.lst-old
    ln -s /rpool/boot/grub/menu.lst menu.lst


Now we can run bootadm without any errors

    
    bootadm list-menu


Time to add the boot entry for our xVM kernel

**Update**: [Kevin Elliot](http://www.kevinelliott.net/blog/) said that running “bootadm -m upgrade”  added the xVM entry automatically after performing the linkage steps. You will still need to add the 'boofs rpool/ROOT/opensolaris lines however. [[link](http://trevoro.ca/blog/2008/05/07/getting-xvm-to-work-in-opensolaris-200805/#comment-4778)] [[link](http://trevoro.ca/blog/2008/05/07/getting-xvm-to-work-in-opensolaris-200805/#comment-4795)]

open up the /boot/grub/menu.lst file  and add the following after the 'bootadm' section

    
    vim /boot/grub/menu.lst



    
    title OpenSolaris 2008.05 snv_86_rc3 X86 xVM
    bootfs rpool/ROOT/opensolaris
    kernel$ /boot/$ISADIR/xen.gz
    module$ /platform/i86xpv/kernel/$ISADIR/unix /platform/i86xpv/kernel/$ISADIR/unix -B $ZFS-BOOTFS
    module$ /platform/i86pc/$ISADIR/boot_archive


Note that if you've done a pkg upgrade, your ZFS root will more than likely be different. You'll have to choose the ZFS root partition that you were using when you installed the packages earlier, otherwise they won't be available

**Note**: Make sure to change the default selection to the appropriate placeholder of your xVM entry. The numbering for grub starts at 0. This means that to boot the first entry in your menu.lst file, your 'default' value in menu.lst should be 0, and so on and so forth.

Let's run bootadm and see what our changes look like

    
    bootadm list-menu



    
    The location for the active GRUB menu is: /boot/grub/menu.lst
    default 1
    timeout 10
    0 OpenSolaris 2008.05 snv_86_rc3 X86 i86pc
    1 OpenSolaris 2008.05 snv_86_rc3 X86 xVM


Pretty. Now its time to try it out. In order to switch kernels you have to reboot your system

    
    shutdown -y -g0 -i6


Your system should reboot using the xvm capable kernel. If your sytem could not boot properly then select the old kernel from the boot menu as your system starts.

To double-check that you're running the proper kernel, run uname

    
    uname -a


it should give you something like this

    
    SunOS pluto 5.11 snv_86 i86pc i386 <strong>i86xpv</strong> Solaris


The last step is to enable the proper xVM services

    
    svcadm enable store
    svcadm enable xend
    svcadm enable console
    svcadm enable domains
    svcadm enable virtd


Running

    
    svcs | grep xvm


should print the following

    
    online          2:22:12 svc:/system/xvm/store:default
    online          2:22:27 svc:/system/xvm/xend:default
    online          2:22:27 svc:/system/xvm/console:default
    online          2:22:27 svc:/system/xvm/domains:default


One quick test

    
    xm top


Should work properly.

Hopefully that worked for you. I appreciate any feedback!

**Update #2**

Some people are reporting problems creating DomU's. If you're running into problems, try running the script below

    
    BASEDIR=${BASEDIR:-/}
    /usr/sbin/syseventadm list -R $BASEDIR -c EC_xendev > /dev/null 2>&1
    if [ $? -ne 0 ]
    then
    /usr/sbin/syseventadm add -R $BASEDIR -c EC_xendev \
    /usr/lib/xen/scripts/xpvd-event 'action=$subclass' \
    'domain=$domain' 'vdev=$vdev' 'device=$device' \
    'devclass=$devclass' 'febe=$fob'
    fi
    /usr/sbin/syseventadm list -R $BASEDIR -c EC_xpvsys > /dev/null 2>&1
    if [ $? -ne 0 ]
    then
    /usr/sbin/syseventadm add -R $BASEDIR -c EC_xpvsys \
    /usr/lib/xen/scripts/xpvsys-event 'subclass=$subclass' \
    'shutdown=$shutdown'
    fi
    # restart daemon if the package is being added to the running system
    if [ "$BASEDIR" = "/" -a $? -eq 0 ]
    then
    /usr/sbin/syseventadm restart
    fi
