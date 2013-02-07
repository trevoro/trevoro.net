---
comments: true
date: 2008-03-11 23:14:24
layout: post
slug: picture-this-a-better-kind-of-captcha
title: Picture This - A Better Kind of CAPTCHA
wordpress_id: 189
categories:
- General
---

In the defense against bots and automated scripts, people often employ the [CAPTCHA](http://en.wikipedia.org/wiki/Captcha) strategy. Typically, a CAPTCHA is a series of letters that are non [OCR](http://en.wikipedia.org/wiki/Optical_character_recognition) friendly, and are difficult for humans to read. The reason they stop computers is because they're deformed using graphics transforms such as pinch, whirl and rotate, which are difficult for computers to understand, but people have an easier time understanding what's there. Not that easy though. Often times captchas are complicated, and difficult to read. Captchas that use random strings of letters and numbers are a deterrent to signing up for a service - especially if you can't get it right after a couple of tries. Some sites will generate sound files that will tell you what to type in, others will simply use words and ask you to put them into the text box, but both of them make it slightly easier for a bot to sign up for your service. Anyone who writes automated tasking can tell you that once you can automate interaction with any kind of service, it can be exploited for *some* purpose. Text-based Captchas such as questions about history or arithmetic are cool, but after you get to a certain market share and have enough exposure someone will automate answering those questions.

An alternative to text-based Captchas are Picture-based Captchas. Simply put, a Picture Captcha asks a user to identify objects in an image - which is MUCH harder for a computer. This isn't a new technique, but it seems to be getting a little bit more market share. Microsoft Research (Don't say it) has [Asirra](http://research.microsoft.com/asirra/), which are similar to (or copied from?) the much-hyped [KittenAuth](http://www.thepcspy.com/kittenauth). [HumanAuth](http://www.gigoit.org/humanauth/) is another implementation, as well as [ESP-PIX](http://gs264.sp.cs.cmu.edu/cgi-bin/esp-pix)

My favourite by far is [HotCaptcha](http://www.hotcaptcha.com/). It uses hot or not and requires you to select 3 images of 'hot people'. Because we all tend to percieve beauty the same way (Symmetry, propotions, etc) it's pretty well understood what 'hot' is. The 3 images are required because otherwise it would just be a 50/50 guess. The same goes wiht KittenAuth. You need multiple identifications in order to prove that you are indeed a human.

     All in all it's cool stuff, and because user-registration pages suck, we should make them easier to use - maybe even fun.

-T
