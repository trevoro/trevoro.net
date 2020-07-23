---
title: The Semantic Stack
layout: post
---

The internet is constantly evolving. What was once a loosely connected
collection of documents has turned into a socialized application that allows
you to search and gather information on pretty much anything you desire.

<p>But what if web technologies could tighten the relationship between sets of
information? As with any system, a set of technologies lie at its core, and
those technologies are what I call the &#8220;Semantic Stack&#8221;.</p>
<p><strong>1</strong>.  <a
href="http://web.archive.org/web/20080221230722/http://en.wikipedia.org/wiki/Resource_Description_Framework">RDF</a>
- Resource Description Framework</p> <p>RDF is a standard for creating
  structured data about data, or Metadata. Specifically, RDF is a tool for
  associating values of a certain type to a unique object. An example of data
  that could be described by RDF is &#8220;Trevor Orsztynowicz is the author of
  Trevoro.ca&#8221;. In the RDF model, trevoro.ca (URI) is authored (value
  type) by Trevor Orsztynowicz (Value). RDF is usually expressed in XML format,
  which ends up looking like this</p> <pre>&lt;?xml:namespace ns =
  "http://www.w3.org/RDF/RDF/" prefix ="RDF" ?&gt; &lt;?xml:namespace ns =
  "http://purl.oclc.org/DC/" prefix = "DC" ?&gt; 

&lt;RDF:RDF&gt; &lt;RDF:Description RDF:href="http://trevoro.ca"&gt;
&lt;DC:Creator&gt;Trevor Orsztynowicz&lt;/DC:Creator&gt;
&lt;/RDF:Description&gt; &lt;/RDF:RDF&gt;</pre> <p>Adding structure to MetaData
is important - because if a massive number of systems and processes are going
to share that information, then they have to agree upon a language, or
framework of writing it.</p> <p><strong>2</strong>. <a
href="http://web.archive.org/web/20080221230722/http://en.wikipedia.org/wiki/SPARQL">SPARQL</a>
- RDF Querying Language</p> <p>SPARQL is a SQL like querying language for RDF
data. SPARQL gives you the ability to query a system with constraints, and get
back an interesting set of data. Think of it as a way of standardizing SQL
queries across multiple systems.  You can map your SQL Database to SPARQL if
you want to share your data, making SPARQL not only the query language but also
a transition mechanism, and way of opening up access to your data in a
standardized and useful way. Think mashups in 50 lines of code and 10 minutes,
or better yet: mashups-on-the-fly.</p> <p><strong>3</strong>. <a
href="http://web.archive.org/web/20080221230722/http://en.wikipedia.org/wiki/Web_Ontology_Language">OWL</a>
- Web Ontology Language</p> <p>OWL is a method of describing <a
href="http://web.archive.org/web/20080221230722/http://tomgruber.org/writing/ontology-definition-2007.htm">Ontologies</a>
- or loosely the connections and meanings of objects and relationships -
contained in a document which can then be parsed easily by a machine. What this
means, is that understanding OWL means understanding the future of knowledge
transfer not only between machines, but between machines and people. Because
OWL was designed for computers, it&#8217;s not really easy to read on your own;
<a
href="http://web.archive.org/web/20080221230722/http://www.cs.man.ac.uk/~horrocks/ISWC2003/Tutorial/people+pets.abs">This</a>
is what an OWL format file written in XML looks like. OWL will make it possible
to ask plain language questions to computers. For example, &#8220;Where in
Vancouver can I buy wines that taste good with smoked gruyere cheese&#8221; is
a query that you have to rewrite in your head, and perform a knowledge transfer
yourself into a secondary query to get the results you need. Information
described in OWL will eliminate that need.</p> <p><strong>4</strong>. <a
href="http://web.archive.org/web/20080221230722/http://www.xmpp.org/about/">XMPP</a>
- Extensible Messaging and Presence Protocol</p> <p>XMPP is going to enable a
whole bunch of <a
href="http://web.archive.org/web/20080221230722/http://trevoro.ca/blog/2008/02/04/pull-to-push-rss-to-xmpp/">cool
things</a>, and while it&#8217;s not necessarily a semantic technology if an of
itself, it lends itself to what I call a naturalized online conversation.
Computers shouldn&#8217;t have to poll for data. What if systems could let each
other know about information, contextualize it, combine elements of that data
with resources from a 3rd party, and deliver to you a summary of information,
all in real-time? When a website becomes a conversational knowledge
transformation system it&#8217;s no longer a website - It&#8217;s a friend
telling you what you need to know.</p> <p><strong>5</strong>. <a
href="http://web.archive.org/web/20080221230722/http://openid.net/what/">OpenID</a>
- Distributed Authentication Model</p> <p>All of this information is going to
have to be trusted, as are the sources and people using that information.
OpenID is the perfect solution to identifying and creating web&#8217;s of trust
among and between environments. An authentication system would allow you to
provide selective access to specific queries. Because OpenID already uses
URI&#8217;s as their main identifier, it fits perfectly within the RDF model.
With this model you could create levels of trust, weigh the validity of your
results, and distinguish between systems trying to access your data.</p>
