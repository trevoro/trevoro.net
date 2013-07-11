---
comments: true
date: 2010-11-24 09:42:48
layout: post
slug: how-to-do-prototype-validation-in-javascript
title: How to do Prototype Validation in Javascript
---

I hacked together a quick model for a prototype REST API written in Node.js, and wanted to validate an object prior to saving it to a database. I didn't want or need some wacky full blown ORM but I did want to ensure that the records I was storing were consistent.

Validating in Javascript can be done in many ways but this is a method I came up with after a couple iterations. Let's take a look at the code.

{% highlight javascript %}
PictureValidations = function() {

  this.name = function(name) {
    return /^[A-Za-z0-9_-]{8,64}$/.test(name);
  }

  this.type = function(type) {
    return /^(jpeg|png|gif|bmp)$/.test(type);
  }

  this.tags = function(tags) {
    for (i in tags) {
      if(!(/^[A-Za-z0-9]+$/.test(tags[i]))) { return false };
    }
  }

}

exports.Picture = function(options) {
  this.name =  options.name ||"unassigned" ;
  this.tags = options.tags;
  this.description = options.description;
  this.created_on = new Date().getTime();
}

exports.Picture.prototype.valid = function() {
  var validations = new PictureValidations();
  var valid = true;
  for (v in validations) {
    valid = validations[v](this[v]);
    if (valid == false) { break ; } // stop checking on first failure
  };
  return valid
}
{% endhighlight %}

### How it works


We've defined a new Object called Picture which has all the properties associated with it, as well as some defaults.

We also specify another object called PictureValidations which contains a bunch of functions. Each function is named after the properties in the Picture that we want to validate. Each function will return either True or False when it is called with the valid() method which has been added to the Picture prototype. The key is the line that says:


    valid = validations[v](this[v]);


This is storing the status returned from the function in the validations Object we've instantiated with the value of the current objects properties (this).
It will then check to see whether or not it passed or failed.

The nice thing about this method is that you can write a function that does just about anything to determine whether or not something is valid.

Anyway, it seems to work, but I'd appreciate any feedback!
