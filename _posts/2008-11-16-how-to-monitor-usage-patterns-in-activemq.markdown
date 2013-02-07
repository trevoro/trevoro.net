---
comments: true
date: 2008-11-16 20:42:05
layout: post
slug: how-to-monitor-usage-patterns-in-activemq
title: How to Monitor Usage Patterns in ActiveMQ
wordpress_id: 298
categories:
- General
- howto
- monitoring
- sysadmin
tags:
- linkedin
- ruby activemq code monitoring sqs
---

[ActiveMQ](http://activemq.apache.org/) is an enterprise message bus that's completely open source. It's great if you want to tie together a bunch of different services, or act as your own personal Simple Message Queue (SQS). It supports a few interface methods such as JMS, Stomp, XMPP and plain REST. You can learn more about ActiveMQ [here](http://activemq.apache.org/).

There are a few monitoring solutions for ActiveMQ that will let you know when its broken, but I needed to grab usage patterns over time, so I would be able to automatically spin up more workers. I didn't see anything quickly available so I threw this together:

#queuemonitor.rb

    
    # queries the activeMQ status XML file and returns relevant data.
    # I'm sure there's a more elegant way of creating method directly out of xml.
    
    # Rather than have each queuemonitor as a seprate class with one name, we
    # might want to be able to parse multiple queues on the same server. So we have
    # an array of queue names (@queues) that contain the names of queues we want to monitor.
    # if you want to monitor more than one queue then you'd have to create a new QueueMonitor
    # instance.
    
    class QueueMonitor
    
      attr_accessor :url, :queues
    
      require 'net/http'
      require 'rexml/document'
    
      def initialize
        @url="http://127.0.0.1:8161/admin/xml/queues.jsp"
        @queues = []
      end
    
      #add a queue to the list of queues that we'll pay attention to
      def addqueue(queue)
        @queues.push(queue) unless @queues.include?(queue)
      end
    
      def delqueue(queue)
        @names.reject!{|q| q == queue}
      end
    
      def query
        results = []
        date = Time.now
        xml_data = Net::HTTP.get_response(URI.parse(@url)).body
        doc = REXML::Document.new(xml_data)
    
        doc.elements.each('queues/queue') do |queue|
          name = queue.attributes["name"]
          # only list from Queues listed in the '@names'
          if @queues.member?(name) then
    
            queue.elements.each('stats') do |ele|
              size = ele.attributes["size"]
              consumers = ele.attributes["consumerCount"]
              enqueue = ele.attributes["enqueueCount"]
              dequeue = ele.attributes["dequeueCount"]
    
              queue = { 'name' => name,
                        'size' => size,
                        'consumers' => consumers,
                        'enqueue' => enqueue,
                        'dequeue' => dequeue,
                        'date' => date
              }
    
              results < < queue
            end
          end
        end
        return results
      end
    
    end
    


You can then start monitoring your queue servers with something like this:

    
    #!/usr/bin/env ruby
    
    require 'queuemonitor'
    
    mfreq = 30
    @monitor = QueueMonitor.new
    @monitor.url = "http://67.202.41.64:8161/admin/xml/queues.jsp"
    @monitor.addqueue "pubsub.pings.spider"
    
    #do something interesting like write to a file
    #screen or database
    
    def query
      date = Time.now
      results = @monitor.query
      results.each do |q|
        puts "#{date} #{q["name"]} #{q["size"]} #{q["consumers"]}"
      end
    end
    
    #You'd want to use daemonize here...
    
    loop do
      query
      sleep mfreq
    end
    


It works pretty well. Right now I'm just writing the results to a file to parse later, and so you can setup other parts of a program that would automatically spin up new workers based on a set of circumstances. The algorithm for that is the hard part and will depend on a bunch of your own rules.
