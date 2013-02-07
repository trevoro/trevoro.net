---
comments: true
date: 2008-06-04 15:53:06
layout: post
slug: eucalyptus-roll-your-own-ec2
title: Eucalyptus - Roll your own EC2
wordpress_id: 241
categories:
- cloud
- Geek
- General
- sysadmin
---

![eucalyptus logo](http://trevoro.ca/blog/wp-content/uploads/2008/06/eucalyptuslogotext-300px.png)

Great Scott! An aquaintance of mine just forwarded this to me today and my jaw dropped. A team working out of University of California, Santa Barbara led by [Rich Wolski](http://www.cs.ucsb.edu/~rich/) has reverse engineered the [EC2](http://www.amazon.com/gp/browse.html?node=201590011) framework and (apparently) released it under a FreeBSD style license.

They gave a demo at the [Open Source Grid and Cluster Conference](http://www.opensourcegridcluster.org/), which was a paid conference (tsk tsk tsk)

From the website:

_Overall, the goal of the EUCALYPTUS project is to foster community research and development of Elastic/Utility/Cloud service implementation technologies, resource allocation strategies, service level agreement (SLA) mechanisms and policies, and usage models.  The current release is version 1.0 and it includes the following features:_



	
  * _Interface compatibility with EC2_

	
  * _Simple installation and deployment using Rocks cluster-management tools_

	
  * _Simple set of extensible cloud allocation policies_

	
  * _Overlay functionality requiring no modification to the target Linux environment_

	
  * _Basic "Cloud Administrator" tools for system management and user accounting_

	
  * _The ability to configure multiple clusters, each with private internal network addresses, into a single Cloud._


_The initial version of EUCALYPTUS requires [Xen](http://xen.org/) to be installed on all nodes that can be allocated, but no modifications to the "dom0" installation or to the hypervisor itself._

This is fantastic and *exactly* what the industry needs right now. In fact, it falls in line nicely with what we're working on at [LayerBoom.](http://layerboom.com) I'm extremely interested to see how this works. I'm actually booting it up as I type this.

[[link](http://eucalyptus.cs.ucsb.edu/wiki)] [[link](http://ostatic.com/164044-blog/eucalyptus-an-unsung-open-source-infrastructure-for-cloud-computing#continue)]


> 
