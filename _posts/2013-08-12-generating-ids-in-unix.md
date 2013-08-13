---
layout: post
title: Generating IDs in Unix
slug: It's easy to generate unique IDs in Unix using several tools
---

Sometimes I've found it handy to be able to generate unique IDs directly from
the command line. The easiest and most unique tool to use is `uuidgen`.
UUIDs are 122 bits in length; so colossal that the chances of a [collision are
incredibly low](http://en.wikipedia.org/wiki/Universally_unique_identifier#Random_UUID_probability_of_duplicates).

The `uuidgen` tool generates version 4 UUIDs which is just a random sequence of
128 numbers and letters.

    $ uuidgen
    6445B35A-BBD6-412C-B782-5B732DCF5919

UUIDs are probably what you want, but they're really a PITA to read out to
someone, say over the phone. They're also ugly to look at. 

### Generating Friendlier IDs

For a recent project I was working on I wanted a smaller ID. 
Luckily `openssl` can generate and hash random data which we can truncate with
`printf`

    $ id=$(openssl rand 1000 | openssl sha1) && printf "%s${id:0:8}\n"
    7cb6c62b

That's a bit nicer, but it definitely comes with tradeoffs. The tradeoff being
you have a higher chance of collisions. The range `[a-z0-9]` gives us 36 possibilties (base 36)
and 36<sup>8</sup> gives us 2.82 x 10<sup>12</sup> which __looks__ like a lot but
you have to make sure it still fits your use case. IE, not instant messaging but
maybe for a build environment.
