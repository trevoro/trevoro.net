Grid services and platforms that are always on and always available are awesome
for running cheap, highly-available services on the internet. That’s great,
because it means the barrier to entry, and the cost to deliver those services is
low making innovations by small teams with little to no cash much more possible.
What it means though, is that we’re creating Datacenters with tons of capacity
that’s being used during two peak periods throughout the day. After speaking
with a few Datacenter architects are the Sun Open House, I realized that not
only are todays DC designs supremely inefficient, but most of the stuff running
in them isn’t being used up to 80% of the day. Cooling costs are extremely high,
and the cost of running a grid to sustain maximum capacity + wiggle room is
shocking. So in order to reduce those costs some companies like HP and Sun are
actively looking at computers that will turn themselves off or into ‘low power’
mode when not being used. That’s cool, but I don’t think we have to wait for
them to build that system. If a computer isn’t required, then a remote ‘green
monitor’ can log in and gracefully shutdown unnecessary systems, and the magic
known as ‘Wake-on-LAN‘ can be used to bring them back up again. If you could
build that into your grid then you could instantly save energy, not only to run
a system, but on cooling as well. Of course, this would have to be mapped to a
prediction engine that would say ‘traditionally we’ve needed more capacity at
7:30AM Pacific, so boot up some systems’, but that would be a really fun
project.

Let’s take it one step further.

If energy costs are really high then you want to use as  little of it as
possible. So how about grabbing compute cycles from a grid that’s in the peak
power zone for Solar? It’s cheap to send a few hundred gigs of data to be
crunched, but its expensive to work on it. If you could do that, then you could
have your capacity for computing literally follow the Sun. Someone has to work
out the math on what’s cheaper - moving electricity, or moving the cycles, but
my bets on the cycles because I think a mile of fiber costs less than a mile of
High-voltage lines.

DC A wants to send a data crunching job offsite. It’s going to check the
International Grid Exchange (I just made this up) for cheap capacity somewhere.
DC B’s rate is 5.28$/teraflop hour because it’s in Iceland (which has cheap
bandwidth and geothermal energy - oh and its cold). DC A’s rate for the same
service is $8.22/teraflop hour, so DC A exports that task to DC B, and when it’s
done DC A gets the resulting data set - or a trickle of data comes back over the
tasks compute time.

Now we have a market where the most efficient winner gets the utilization. True
utility computing, true scaling on demand, no market hype or hand waving.

You could even buy Grid ‘Futures’; You want to make sure you get the capacity,
or you could prospect and buy chunks of time for resale later on. Basically
turning computing into a true commodity.

I hope that’s one way to make computing a lot more efficient.

