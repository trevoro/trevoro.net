---
title: How to Balance Technical Debt
date: 2019-05-04
layout: post
hidden: false
---
One of the recurring and common complains about Agile and its associated
methodologies is that it doesn’t make an explicit provision for balancing
software maintenance with new features. I’ll make the case that those are both
related, and explain a system that I’ve seen work in the past to balance both
maintenance and quality with new product work. The major benefit of this
approach are that it taps into the power of small consistent improvements, and
also creates space for software teams to do the work they need to do on an
ongoing basis.

TL;DR: Split your sprints / weeks / months into a set of Engineering activities
and Product activities. Measure and maintain a ratio of work between these two
categories for every period. A healthy ratio is 25% engineering to 75% product.
When an objective metric of quality goes below its threshold, then your team
increases the ratio to something else like 50% / 50% until the metric improves.
This tells you when to make improvements, and when to stop some kinds of
improvements.

1. **Everything degrades over time and software is no different**. Dependencies go
   stale, implementations don't scale with their datasets, number of users
   increase, number of developers increase, features & complexity increases, and
   a huge number of other variables all contribute to the subjective and
   objective quality of a codebase. No matter what we do, maintenance will be
   some part of the software development process, whether its incorporated into
   “regular work” or not. If we can agree software maintenance has to happen,
   then we can move on to the more important question of “OK, how much?”. In
   order to answer “How much?” we can split our work into categories and measure
   the type of work happening in those categories.

2. **Software work can be roughly split into Product and Engineering related
   activities**. Planning, Implementation, Quality, and Release are common high
   level categories. Regardless of your teams series of steps, some work will be
   more technical debt / engineering / scale [9] related, and some work will be
   more ‘add button that does X’ / ‘implement new UI’ related. For the sake of
   conversation, let’s call those two categories “Engineering” and “Product”
   oriented work respectively. In general, product oriented work are features or
   enhancements whose primary goal is help the business succeed. Engineering
   oriented activities are also critical to the success of the business and
   optimize a separate set of metrics. Both sets of work have to happen in a
   constrained amount of time. A good software team will be doing roughly 1 part
   Engineering work to every 3 parts Product work or a 25/75% split. The
   Engineering work should make a lasting positive change and should be planned
   and prioritized as well as any product work.

3. **Developer time is a limited resource**. A team will probably not accomplish
   more or less than it did the previous time period, all else being equal (and
   all else isn’t equal). The team cannot be expected to do engineering related
   activities in their “spare” time, just as much as they cannot be expected to
   ship new features on evenings and weekends in a sustainable way. 

4. **The success of the company depends on the success of the Software**. If the
   uptime of the application is poor then users will be frustrated and quit. If
   the code base is untested, has no standards, and takes a long time to build,
   it will be difficult to modify. If the company has to add new features, and
   the engineering teams ability to ship code depends on the health of the
   application / code base, then time must be dedicated to working on both of
   those things. Without doing both of these activities the business may fail.

4. **Objective measurements of quality are important**. Measurements of quality are
   critical for both Engineering and Product work but quality is often times
   subjective. Our goal should be to make that as objective as possible. The
   simplest way to do this is to define and measure uptime but more advanced
   methods could include choosing from a subset of engineering metrics and
   weighting them appropriately. If uptime during a given time period is poor,
   then one could say the quality of infrastructure or code is compromised and
   has to be addressed. From the businesses perspective, it likely does not care
   about linting rules, unit tests, or reliable deploy processes. It does care
   about software issues that will affect business metrics like churn, bounce
   rates, ARPA, etc. Product and Engineering teams can agree on what quality
   means to the software and business.

5. **Engineering and Product can agree on a simple contract.** If the Quality goes
   down then the engineering team gets more time for Engineering related work.
   For example if the software experiences an outage then it gets to increase
   its Engineering to Product ratio from 25/75 to 50/50 until the quality
   returns. This gives engineering time to do reactive maintenance to address
   the issues in the outage. If your metric is associated with response times
   then the same rules would apply. The benefit of a contract is that breaking
   this contract becomes an explicit decision vs a tacit agreement.

## How this works in Practice

The stakeholders (engineering and product) working on landing pages agree that
Page Load Times are an important measurement of quality for their product. The
team agrees on how to measure this quality using synthetic monitoring with
throttling and device types chosen for their target audience and geography. 

A baseline measurement is taken and automated.  If the measurement is within an
acceptable number like <1s for the 95th ntile of samples, then the page is
loading “fast enough”.  

When the engineering team plans its work - lets just say it’s using 1 week
planning windows - it allocates 25% of its work to technical debt related tasks
and the remainder to product oriented tasks; Work is completed and features are
shipped [6]. 

If during the course of the 1 week of implementation the page load time goes
above 1s for the 95th ntile then the team will change its Engineering to Product
ratio from 25/75 to 50/50 to address the needs. This means less landing pages
and more time focused on page load time improvements. The next planning session
has 50% Engineering work and remainder is Product.  

The page load times return to acceptable limits. The next planning session goes
back to 25/75 split.

### Notes

1. You cannot set or change the quality metric without involving all the key
stakeholders. It’s an informal contract within the organization.

2. The metric should be as objective as possible and thus as automated as possible.
Ideally no subjectivity should be included in this measurement and if there are
areas of dispute, those should be topics for discussion amongst the more senior
staff members.  

3. For those of us who work on APIs that let people integrate our services into
their applications, I would argue you have a technical product and the same
categories can be held in place 

4. When teams are small it’s easy to maintain subjective alignment on quality
because there are fewer people to convince. As teams scale, more people have a
voice, and those stakeholders need alignment in order to affect meaningful
change. Alignment requires objectivity in order to avoid confusion.  

5. Good objective measurements for software quality are things like uptime, page
load times, API response time, number of bugs reported by users, mean time to
recover, build & deploy times, deployments, commit to production time, etc. A
subset of these will be user affecting metrics and should be incorporated into
some kind of index. It’s important that this index suits your business in a way
that other stakeholders agree with.  

6. If changes are big and require dedicated engineering sprints then that might be
a good time to think about versioning, feature flagging, or doing more planning
and acknowleding a bigger project.

7. Engineering work also categorizes separately. There is reactive maintenance,
preventative maintenance, code quality, engineering focused metric improvements,
amongst many others.

8. Transparency is paramount; We should not be sneaking improvements in off hours
or refactoring unrelated areas of code with copy change commits.  

9. Scaling is important but it’s critical to know when to stop.
