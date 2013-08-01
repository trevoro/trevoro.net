---
layout: post
title: Getting Started With Manta
date: 2013-07-31
---

Manta is a powerful new type of object store from the same folks that invented Node.js. 
The cool part is that Manta *isnt just an object store* - it's an __object store with built-in compute__. 
That means that you can run code and other familiar commands against the objects directly on the server. 
I'll walk you through setting up Manta, and a simple example of where you could use the compute job functionality.
It's assumed you have already setup a [Joyent account](https://https://sso.joyentcloud.com/signup) and have [node.js](http://nodejs.org) installed
on your machine.

### 1. Install Manta

    $ npm install -g manta

### 2. Set your Environment Variables

You can find these on your [dashboard page](https://my.joyentcloud.com/main/#!/storage).
Just copy and paste them into your `.bashrc` then source with `. ~/.bashrc`

    export MANTA_URL=https://us-east.manta.joyent.com
    export MANTA_USER=your_user_name
    export MANTA_KEY_ID=fd:f8:08:22:11:b2:ef:db:87:09:c0:2b:4b:fd:99:f7

### 3. Upload a File

At this point you should be ready to upload a file. Manta includes command
line utilities for listing, creating, and destroying files and directories.
Let's use [this sample file](https://us-east.manta.joyent.com/trevoro/public/beer.jpg)

    $ mput /$MANTA_USER/public/beer.jpg -f beer.jpg
    $ wget https://us-east.manta.joyent.com/$MANTA_USER/public/beer.jpg

You're done!

### That was easy!

Manta is pretty easy to use, but that's really only the beginning. It's got tons
of powerful functionality built into it. That functionality comes in the form of
map reduce jobs which you can easily run with a single shell command.

Let's start with a simple example.

### Create a Thumbnail

    $ mfind /$MANTA_USER/public | \
    mjob create -w -m 'convert $MANTA_INPUT_FILE -resize 100x jpeg:- | mpipe ${MANTA_INPUT_OBJECT%.*}-100x.jpg'

    81e40938-d33c-42da-ab61-33527360e366
    added 1 inputs to 81e40938-d33c-42da-ab61-33527360e366

    $ wget https://us-east.manta.joyent.com/$MANTA_USER/public/beer-100x.jpg

[check out the result](https://us-east.manta.joyent.com/trevoro/public/beer-100x.jpg)


### Let's think at Scale

That's a simple one-liner that will create thumbnails for *all* of your images,
which is pretty amazing considering the alternative would be to list all your
images, download them, convert them, then put them back. If you have 100's of
millions of images in your object store, then that old process can take days.

With manta it just takes a few seconds.

### Let's Clean it up a little 

That little goober shows how powerful Manta can be. But we're going to make this
a tiny bit fancier. What if you need 4 differerent thumbnails? Writing that all
out on the command line might get a little ugly. At the end of the day though,
youre just running code that would run on any server, like a shell script or a
node app, etc. 

Luckily we can submit these scripts as arguments to our map reduce jobs in Manta. 
These files are called [assets](http://apidocs.joyent.com/manta/jobs-reference.html#assets-assets-property).

Here's an example shell script we'll use as our asset


    #!/usr/bin/env bash

    sizes=( 128 256 512 )

    for i in "${sizes[@]}" ; do
    	convert $MANTA_INPUT_FILE -resize ${i}x jpeg:- | \
    	  mpipe "${MANTA_INPUT_OBJECT%.*}-${i}x.jpg
    done
   
    
Lets upload it as an asset

    $ mput -f thumb.sh /$MANTA_USER/stor/thumb.sh

And create our job again

    $ mfind /$MANTA_USER/public | \
    mjob create -w -s /$MANTA_USER/stor/thumb.sh \
    -m 'bash /assets/$MANTA_USER/stor/thumb.sh'


Now we have 3 thumbnails

    $ mls /$MANTA_USER/public
    beer-128x.jpg
    beer-256x.jpg
    beer-512x.jpg
    beer.jpg

### Thats just the beginning

This is a simple example that hopefully shows you what Manta can do. The
[documentation is pretty extensive](http://apidocs.joyent.com/manta) and they're on [irc.freenode.net](http://freenode.net) under `#manta`
if you have any questions.


