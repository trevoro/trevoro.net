---
comments: true
date: 2008-01-16 21:24:51
layout: post
slug: protecting-applications-with-modsecurity
title: Protecting Applications with ModSecurity
wordpress_id: 159
categories:
- General
---

The internet is a really harsh place.

Systems that go online without being protected by some type of firewall solution are infected in a matter of minutes. Any decent hosting environment will have a firewall in place to protect your systems from all types of unsolicited and nasty network traffic, but firewalls operate at the TCP/IP layer - not the application layer. Exploits such as[ SQL](http://www.computerworld.com/action/article.do?command=viewArticleBasic&taxonomyId=16&articleId=9055858&intsrc=hm_topic) [Injection](http://www.theregister.co.uk/2008/01/08/malicious_website_redirectors/print.html) [attacks](http://www.sans.org/newsletters/newsbites/newsbites.php?vol=10&issue=2&portal=18568e8354c1477939922bd793b68360#sID200) are conducted through the very ports that deliver web content, so what can you do to reduce the likelihood of a compromise?

Enter [ModSecurity](http://modsecurity.org). ModSecurity is my favourite web [application layer](http://en.wikipedia.org/wiki/OSI_model#Layer_7:_Application_layer) firewall, because its easy to use, easy to configure, you can write your own rules (If you know how to write regex'es), and most of all its free!

Combined with a few other Apache modules and tricks, you can even protect applications that run on [less fun](http://www.microsoft.com/windowsserver2003/iis/default.mspx) web servers.

The idea is to setup an Apache server to run ModSecurity. We'll also use the built-in module ModProxy to forward or 'proxy' requests to the service we want to protect. This way, the redirection will be transparent to all end-users, and you'll be able to successfully secure your application.

I'd advise anyone interested in ModSecurity to roll it out to a development / QA environment prior to moving to production. That way you can test at least what should be the majority of your traffic. For most websites there will be no issues with the default rule-set, but for more complicated environments and applications you might run into a problem.


### Installing ModSecurity & Rules


If you're installing ModSecurity on a debian or redhat based system and you're not compiling from source, then I suggest taking a look at this [howtoforge](http://www.howtoforge.com/apache_mod_security) article. If you've compiled apache from source I suggest reading the [official documentation](http://www.modsecurity.org/documentation/modsecurity-apache/2.1.5/html-multipage/02-installation.html).

After you're happy with your installation you should test your rules. The easiest way to generate some nasty traffic is to try out [Nikto](http://www.cirt.net/code/nikto.shtml) on your webserver to see what ModSecurity spits out. Your modsec_audit.log should look something like this...

    --d940cc10-H--Message: Access denied with code 400 (phase 1). Operator EQ match: 0. [id "960015"] [msg "Request Missing an Accept Header"]
    Action: Intercepted (phase 1)
    Stopwatch: 1200537267737224 460 (- - -)
    Producer: ModSecurity v2.0.4 (Apache 2.x)
    Server: Apache/2.2.6 (Unix) mod_ssl/2.2.6 OpenSSL/0.9.7a
    --d940cc10-Z--

If you dont see anything you'll have to troubleshoot your ModSecurity installation.

Once you're happy with your ModSecurity install you're ready for phase two.


### Setting Up ModProxy


[ModProxy](http://httpd.apache.org/docs/2.0/mod/mod_proxy.html) should be included by default with your Apache build. The easiest way to find out if ModProxy is enabled is to check your modules.conf or modules folder in your apache config folder. If the modproxy.conf is separate make sure its included somehow via your httpd.conf or apache2.conf files.


### Setup a Virtual IP


The best way to transition your site to using mod_proxy is to setup a VIP and repoint your public IP address to the new internal VIP using your firewall. This allows you to revert faster than using DNS, as timeouts don't exist on Static firewall mappings. I prefer using 'ip addr', as it plays nice with [Heartbeat](http://www.linux-ha.org/Heartbeat), or you can also setup a sub interface using ifconfig



#### ip


    ip addr add 192.168.0.12 dev eth0



#### ifconfig


    ifconfig eth0:1 192.168.0.12 netmask 255.255.255.0

Make sure you edit your startup files so these devices or aliases get recreated at boot!



### Setup your Virtual Host File


I consider it best practices to have a separate file for each host you're serving in Apache - especially when dealing with ip-based virtual hosts. Here is a sample file, which on my system resides in /usr/local/etc/apache2/sites-available/site.example.com

    <VirtualHost 192.168.0.12>
    ServerAdmin webmaster@example.com
    ServerName site.example.com
    
    DocumentRoot    /var/www/
    
    ProxyRequests Off # Needed for reverse proxy
    ProxyPreserveHost On # Ensure the back-end system gets information in a more native format
    ProxyPass /server-status ! # Your server stats page should not be forwarded
    ProxyPass / http://192.168.0.60/ # Redirect all requests to the back-end IP
    ProxyPassReverse / http://192.168.0.60/ # Rewrite all responses as coming from the local ip 

    <Proxy *>
      Order deny,allow
      Allow from all
    </Proxy>
    </virtualhost>

After you're done editing your file, make a symlink in your sites-enabled folder to your configuration.

    cd /usr/local/etc/apache2/sites-enabled
    ln -s ../sites-available/site.example.com 001-site.example.com

and reload the apache configuration

    apachectl restart



### Firewall / DNS Changes



After testing the new VIP to make sure it works properly you can go live with your new proxy by  re-pointing your traffic to your ip-based virtual host. You can do this by either changing the NAT entry on your firewall (recommended) or adding a new NAT entry and changing your DNS. If you're providing some sort of service for 3rd party companies, you should try and keep your DNS changes to a minimum, as they'll probably have firewall rules too.



### Notes



If you want to use SSL on the service you're protecting you should do the SSL on the Apache server itself - not the back-end IIS process. Your proxy will be able to handle it, and you may free up some resources in the back-end as well. Also, ModSecurity can't intercept information that's encrypted. :)
