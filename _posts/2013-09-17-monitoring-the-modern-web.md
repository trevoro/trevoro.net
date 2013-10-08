---
layout: post
title: Monitoring the Modern Web
date: 2013-09-17
---

APM measures and analyzes performance and patterns at different layers. Whether
you're using server APM to monitor the behavior of virtual or physical
infrastructure, or NPM to monitor your network transactions, the goal is
usually to identify how performance issues affect real users.

Instead of inferring user experience through server logs and database response
times, some offerings opt to monitor how applications behave from the client's
perspective. This can be accomplished using servers that behave like real
users, or by monitoring the users themselves. Monitoring a real user is the
most accurate portrayal of application performance, and can provide a business
with real context about how application performance is affecting users.

Today, real-user monitoring simply involves measuring how long it took to load
a web page.

In this model, a server renders a webpage which is then sent over the internet
to a browser, which then renders the content. External assets like scripts,
styles, and images are loaded either from cache or from their respective
locations. You just measure how long that takes, and report it back to a
central location. There are two different ways to get those measurements: The
time it took to load the HTML and render it in a page with non-blocking assets,
or you can use the W3C NavTiming API.

The page load technique is quite simple. You use JavaScript to insert a
Date.now() at the top, then attach a callback for the "window.onload" event to
calculate the difference.

The W3C NavTiming technique is very similar, but it makes use of functionality
for reporting navigation timing built directly into the browser. The NavTiming
breakdown displays measurements on DNS lookups, TCP overhead, how long it took
to fetch the page, and how long before the load event fires. Without a doubt,
the NavTiming technique offers more granularity and a more accurate
representation of what the user would actually experience. NavTiming isn't
widely supported yet, so you may not get a good sample size with this
technique.

Unfortunately, both techniques fall flat when it comes to monitoring other
critical elements like AJAX requests. That's a pretty critical observation,
because it turns out AJAX is how we enable all the rich functionality that a
user expects, and how most applications have actually dealt with the problem of
slow page loads!

Enter the Web App

In a modern web appplication, you don't browse from page-to-page. You load the
page once, and each click or keypress results in data being loaded from a
server and rendered locally. AJAX is everywhere, and is the key to enabling a
rich, "more native" experience. It can also be much faster than loading a new
page. This technique is extremely popular, so much so that several frameworks
have been written in order to make writing these applications faster and
easier. The list of companies deploying these "single-page apps" continues to
grow.

The real-user monitoring techniques used before are still useful, but only for
when you first load the application. If you only measure page load times, then
you end up with an incomplete view of what's actually happening to your
end-users while they use your app. A good metaphor is "Looking under the lamp
post because that’s where the light is".

What's critical in the world of modern web applications, is to monitor ongoing
application usage. That means monitoring AJAX requests throughout the entire
users session. In order to make that actionable, you also need to monitor other
contextual information about where a user is in your application, what they're
doing, what they did, and who they are.

Monitoring applications from the client also means that you can detect edge
cases that weren't planned for during a synthetic benchmark run. Timing view
rendering and profiling real-world utilization can help identify performance
issues for your most active users.

Does a user have 1000x more data than your average?

How does that affect their performance?

How do long response times affect utilization?

Being able to measure and monitor every aspect of a client's application is
critical. Those details power-up real-user monitoring in a way that lets you
pinpoint performance and issues, and really enhance the user experience.
