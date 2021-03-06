Open standardized protocols are what made the Web possible. We have standards
all the way up the computational stack, from agreeing on which pins mean what in
a wire, to what an X button means in a user-interface. Companies who don’t
embrace them are destined to isolate themselves on tiny technological islands.
Specific implementations, however, don’t have to be shared and open. Huge
markets with tiny verticals of implementation lock out competition, but they
also prevent innovation. But sometimes something beautiful happens, and people
get together to support a new kind of standard. An open, extensible standard
that can be written and read by anyone. One place where this is just starting to
happen is with computer virtualization.

The Open Virtual Machine Format, or OVF is a proposed universal format that aims
to create a secure, extensible method of describing and packaging virtual
containers. Because the standard is open, it means any environment supporting
the standard can import and export those virtual machines between different
hypervisor platforms. The current OVF specification includes definitions ranging
from virtual machine metadata and disk format, all the way to detailed hardware
specifications and logical network information. It also provides an ability for
the virtual machine itself to get information from the hypervisor host, meaning
that if you’re creative you could create some really nifty automated integration
and deployment tools.

If that doesn’t mean much to you, then consider this: Industry heavy-weights
like Dell, HP, IBM, Microsoft, VMware, and XenSource all took part in drafting
the specification. As far support tools go, VMware has published what appears to
be the first OVF container creation tool, available here.

There IS a big problem with OVF right now, and a lot of bloggers and analysts
out there are getting it wrong. OVF is not and does not define a new virtual
disk format, simply a wrapper around them. This means that OVF support doesn’t
enable you to drag and drop virtual machines between Xen and VMware. Some
formats can be converted externally using tools, however most of the current
techniques involve booting up a system, and running a migration tool to be able
to convert the image - not exactly ideal. OVF does include the ability to
describe your specification in an HREF, which means that you could publish your
spec, and create a system that could modify containers on the fly.

If Vmware, Xen, and Parallels are technolgical islands, then OVF may one day be
the bridge that will allow you to travel between them.

