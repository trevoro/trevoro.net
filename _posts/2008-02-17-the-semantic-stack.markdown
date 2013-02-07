---
comments: true
date: 2008-02-17 22:55:21
layout: post
slug: the-semantic-stack
title: The Semantic Stack
wordpress_id: 175
categories:
- General
---

The internet is constantly evolving. What was once a loosely connected collection of documents has turned into a socialized application that allows you to search and gather information on pretty much anything you desire.

But what if web technologies could tighten the relationship between sets of information? As with any system, a set of technologies lie at its core, and those technologies are what I call the "Semantic Stack".

**1**.  [RDF](http://en.wikipedia.org/wiki/Resource_Description_Framework) - Resource Description Framework

RDF is a standard for creating structured data about data, or Metadata. Specifically, RDF is a tool for associating values of a certain type to a unique object. An example of data that could be described by RDF is "Trevor Orsztynowicz is the author of Trevoro.ca". In the RDF model, trevoro.ca (URI) is authored (value type) by Trevor Orsztynowicz (Value). RDF is usually expressed in XML format, which ends up looking like this

    
    <?xml:namespace ns = "http://www.w3.org/RDF/RDF/" prefix ="RDF" ?>
    <?xml:namespace ns = "http://purl.oclc.org/DC/" prefix = "DC" ?> 
    
    <RDF:RDF>
      <RDF:Description RDF:href="http://trevoro.ca">
        <DC:Creator>Trevor Orsztynowicz</DC:Creator>
      </RDF:Description>
    </RDF:RDF>


Adding structure to MetaData is important - because if a massive number of systems and processes are going to share that information, then they have to agree upon a language, or framework of writing it.

**2**. [SPARQL](http://en.wikipedia.org/wiki/SPARQL) - RDF Querying Language

SPARQL is a SQL like querying language for RDF data. SPARQL gives you the ability to query a system with constraints, and get back an interesting set of data. Think of it as a way of standardizing SQL queries across multiple systems.  You can map your SQL Database to SPARQL if you want to share your data, making SPARQL not only the query language but also a transition mechanism, and way of opening up access to your data in a standardized and useful way. Think mashups in 50 lines of code and 10 minutes, or better yet: mashups-on-the-fly.

**3**. [OWL](http://en.wikipedia.org/wiki/Web_Ontology_Language) - Web Ontology Language

OWL is a method of describing [Ontologies](http://tomgruber.org/writing/ontology-definition-2007.htm) - or loosely the connections and meanings of objects and relationships - contained in a document which can then be parsed easily by a machine. What this means, is that understanding OWL means understanding the future of knowledge transfer not only between machines, but between machines and people. Because OWL was designed for computers, it's not really easy to read on your own; [This](http://www.cs.man.ac.uk/~horrocks/ISWC2003/Tutorial/people+pets.abs) is what an OWL format file written in XML looks like. OWL will make it possible to ask plain language questions to computers. For example, "Where in Vancouver can I buy wines that taste good with smoked gruyere cheese" is a query that you have to rewrite in your head, and perform a knowledge transfer yourself into a secondary query to get the results you need. Information described in OWL will eliminate that need.

**4**. [XMPP](http://www.xmpp.org/about/) - Extensible Messaging and Presence Protocol

XMPP is going to enable a whole bunch of [cool things](http://trevoro.ca/blog/2008/02/04/pull-to-push-rss-to-xmpp/), and while it's not necessarily a semantic technology if an of itself, it lends itself to what I call a naturalized online conversation. Computers shouldn't have to poll for data. What if systems could let each other know about information, contextualize it, combine elements of that data with resources from a 3rd party, and deliver to you a summary of information, all in real-time? When a website becomes a conversational knowledge transformation system it's no longer a website - It's a friend telling you what you need to know.

**5**. [OpenID](http://openid.net/what/) - Distributed Authentication Model

All of this information is going to have to be trusted, as are the sources and people using that information. OpenID is the perfect solution to identifying and creating web's of trust among and between environments. An authentication system would allow you to provide selective access to specific queries. Because OpenID already uses URI's as their main identifier, it fits perfectly within the RDF model. With this model you could create levels of trust, weigh the validity of your results, and distinguish between systems trying to access your data.
