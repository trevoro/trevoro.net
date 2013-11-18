---
title: Simpler Event Tracking
slug: Using data attributes to simplify event tracking in Google Analytics
date: 2013-11-18
layout: post
---

We use Google Analytics to do some event tracking. Specifically, we're using the
new analytics.js library which is in private beta. It's pretty clean and the API
for it is really nice. 

Custom event tracking in Analytics.js involves tracking 3 mandatory and two
optional values attached to some element. Mostly for this exercise I wanted to
do click tracking of some navigational elements.

A custom event sent to GA involves a simple call

    ga('send', 'event', 'category', action', 'label', 'value');

It also accepts an object as the second argument. 

    ga('send', {
      'hitType': 'event',          // required
      'eventCategory': 'button',   // required
      'eventAction': 'click',      // required
      'eventLabel':'label',
      'eventValue: 'value'
    };

It would be nice to attach some custom information to each one of these
navigation clicks. That means we either need to tag all these elements with IDs
then write some custom functions each, or a function generator. Or we can use
the HTML `data` attribute to create event tag information. Something along the
lines of this

    <a data-label="navbar" data-value="signup" href="http://signup.example.com">signup</a>

In fact, we can make all of the event data part of the element itself

    <a data-category="button" data-action="click" data-label="navbar" data-value="signup">...</a>

Then we can use some javascript to generate event handlers for these element
clicks.

    $('a[data-category]').each(function(idx, ele) {
      var e, data;
      e = $(ele);
      data = e.data();

      if (data.cateogry === 'button') {
        e.on('click', clickTracker(data))
      }
    });

Now someone who knows HTML can go and start tracking events without having to
write much code
