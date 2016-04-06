---
title: Service Bubbles
date: 2015-09-04
layout: post
---

Lots of the discussion surrounding conversational interfaces is centered on text
and the kinds of interactions that medium will enable. The idea is by starting
with a system that enables organic behaviour, you allow your service to address
generic needs and requirements. That learning leads to augmentation, and with
text, that interaction is augmented by layering in some kind of domain specific
language or if you're lucky a system that understands natural language. 

Today, those languages and commands are being interpreted using chat bots.
Having a bot that can respond to certain types of commands or intercept words
and trigger an action are becoming commonplace on platforms like Slack, but have
existed for a really long time on IRC channels.

Underlying all of this is the need and desire to achieve some kind of outcome.
Conversational interfaces provide a generalized way to achieve a goal. In this
world, the UI allows you to accomplish something, but can also represent the
outcome itself.

![](/img/magic.jpg)

While text is an incredibly powerful tool for asking for information, it's a
very limiting tool for conveying results. In many of these instances we want to
return images. But images are also limiting in their own way. While they can
describe data that is very dense, they're also fixed and non-interactive; it's
impossible to transform or interact with an image in the same way that even a
rudimentary weather app would provide.

Instead of popping out to email to get your ticket, we want to bring the data
forward. What we should be able to achieve is an element you can interact with,
delivered in-line, as a response to our question, or a prompt to our user.

## Service Bubbles

The solution to this problem is a new primitive for chat we call service
bubbles. A service bubble is an interactive widget that appears in-line with
traditional text, images, and video. By adding this 4th mode of interaction, we
give conversational interfaces the flexibility of text and the density of
images, all in a tidy package. 

If we apply this to our earlier example, your flight details can be delivered as
a ticket bubble in line, which you can scrub through for flight details and
present to the airline. 

At Bench our customers routinely connect businesses financial accounts. Adding a
new account through a conversational interface using text would expose sensitive
information. But with a service bubble we're able to capture and keep this
interaction self-contained to the widget, and then have that bubble represent
the state of the connection after we're done. In this way, our UI not only
represents the tool designed to achieve an outcome, but it represents the
outcome as well. 

<iframe src="/chat-demo.html" style="border: 0 none; width: 100%; height: 600px;"></iframe>

Today some modes of this exist, but they require you to leave the chat
interface. You can send links to forms or directly into some state of an
application where you can take these actions, but this type of behaviour limits
the user experience. Another massive loss is the separation of history, by
breaking up what you did into separate tools, when you really want the history
of your chat to update in response to state.

The major benefit of chat is having a free flowing conversation which allow
people and machines to respond where appropriate. By implementing the service
bubble concept, we can provide users with the powerful organic behaviour that
text provides, with rich interactions of specialized applications.
