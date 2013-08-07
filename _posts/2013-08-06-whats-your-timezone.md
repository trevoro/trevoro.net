---
title: "What's your timezone?"
slug: Stop asking your users for their timezone. Use per device timezone settings & Javascript instead.
layout: post
date: 2013-07-31
---

Why do we care what timezone a user is in?

Well beause we have to show them dates that are relevant to them where they
live. Unfortunately you hit a weird scenario where someone is traveling and they
have to update their timezone settings, just because they decided to hop on a
plane that week. Fortunately operating systems on laptops and mobile devices all
adjust timezones automatically whenever they connect to the internet. So we have
the ability to stop asking people what timezone they're in by relying on the
__time on the device__. Here's a method that works well.

It turns out you can get around that problem pretty easily by __always storing
your date data in GMT__, and __making all requests AJAX requests in GMT__.

We then have some view rendering to take care of. Luckily, 
the browser already knows what timezone the user is currently in, so we can make
use of the `getTimezoneOffset()` function to calculate the date to display
locally. We can also use either a `data-time` tag in an element with a class or
just use the new `<time>` tag.

Put something like this in your view. 

    ...
    <time datetime="2013-07-31T05:05Z"></time>
    ...

Then ensure you have something to go through those elements and show the local
time. I'm using straight javascript here, but you could easily write a jQuery
plugin to do the same thing.

    var times = document.getElementsByTagName('time')

    function prettyTime(dateString) {
      if (!dateString)
        return;

      var d = new Date(dateString);
      return d.toDateString();
    }

    for (var i = 0; i < times.length; i++) {
      var t, d;
      t = times[i];
      d = t.getAttribute('datetime')
      t.innerHTML = prettyTime(d);
    }

Now the GMT offset is always __per device__ and not __per account__.

[Check out the fiddle](http://jsfiddle.net/trevoro/T4wRq/)

