---
title: Castmill Open Source
description: We are releasing Castmill as Open Source.
date: 2023-07-26
author: Manuel Astudillo
twitter: manast
cover: /news/castmill-open-source/open-source.jpg
cover_alt: (c) Tim Mossholder. https://unsplash.com/@timmossholder.
avatar: https://avatars.githubusercontent.com/u/95200?v=4
tags: news
---

I am excited to announce that we are open sourcing the next major release of Castmill, a complete
software solution for Digital Signage. We have been working on this for a while and we are finally ready to share it with the world.

Castmill was launched over a decade ago, a time span that has seen significant shifts in the landscape of Digital Signage. My personal experience with constrained devices and cloud technology was certainly beneficial, but digital signage was quite new to me, leading to numerous mistakes and oversights.

Many people believe that Software, as most things in life, has a tendency to get old and rusty. Even with continous maintainance, software has this unstoppable propensity of getting slow and bloated. This usually happens when software is created without a clear set of requirements, and you are forced down the road to add more functionality on a system that did not have the proper architecture to begin with.

While rewriting software from scratch is a risky business, and usually a very bad idea, as it is illustrated by the [failure of Netscape and others to rewrite their flagship products from scratch](https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/), in my opinion, sometimes there is no other way. If you really want to create the best possible solution, you must roll up one's sleeves and start working hard knowing it is going to be a huge amount of work.

The Digital Signage world is crowded with different solutions, so bringing a new one seems like a waste of resources, but still, we are not happy with all the existing solutions (including our own) and thats why we think it is worth the effort. All this software fragmentation creates a lot of wasted resources, all trying to solve the same problem, with more or less success. So we thought that the world would better off if it existed a free, open solution that is so good that there is no need to spend resources in creating another one.

So thats the premise behind developing Castmill 2.0 as a new open source digital signage platform, which we are building in public for all to follow.

As mentioned, we are trying to "crystalize" all our learnings into a best-in-class digital signage solution. For this we have defined 5 pillars that we consider the foundations of our solution and that we think will allow for a solution that will be relevant in many years to come.

## Principles

Our goal is to take all the experience and learnings gained running Castmill for all these years and use them to create a best-in-class Digital Signage solution that covers most if not all modern digital signage scenarios, from the smallest coffee shop to the largest shopping center, train station or airport.

We have defined several principles to guide us in the development and help us stay in course. I will just go through them briefly and leave the details for future posts.

### Security

Security has always been a very important aspect in any software solution, and specially in digital signage, where it is of vital importance to guarantee that every piece of content is displayed on its proper screen, shielded from any undesirable intrusions.

Keeping a computer system secure has always been challenging, but lately it has become even harder as
hackers have more sofisticated tools and resources than ever.

For Castmill we are adopting a "security first" approach with a "zero trust" policy. This implies that each component within the platform operates on the principle of not giving any other component access without a proper authentication and permissions set. The intent is to limit the damage, or 'blast radius', should any part of the system fall under an attacker's control.

The users interacting with the system will have their access limited by minimal permissions sets, so only receiving the permissions required for performing their assigned tasks and nothing else.

Likewise, content players will have several layers of permissions checks before a piece of content is allowed to be displayed on a screen.

### Reliability

Reliability ranks as our second most important principle, this is because reliability is what saves you time and money. The last thing we want to do as digital signage administrators is leave or desks and go to some remote location to fix a broken screen.

High reliability doesn't come from a single magical solution. Instead, it's achieved through a combination of strategies designed to minimize the likelihood of a screen malfunction. By employing a real-time hardware monitoring system, various levels of hypervisors, remote server access as well as our core services implemented in Elixir (a language developed on top of Ericsson's Erlang platform), we can significantly reduce the occurrence of critical errors on screens, and consequently, minimizing the time spent on the customer's site.

### Scalability

Digital signage networks vary greatly in size, ranging from a couple of displays in a coffee shop, to hundreds or even thousands in shopping malls or a large airports.
When we talk about scalability, we're not only considering the system's capacity to handle a vast number of connected devices, it is equally important to have the necessary tools to manage the devices, for example simplifiying how to deliver content to every device, getting alerts when a given device may not work properly or tools to perform bulk maintenance tasks.

### Enterprise grade management

Seasoned managers of digital signage networks will recognize the importance of having the proper tools for managing a large network of devices. In medium and large sized organizations it is crucial to segment which users have access to different parts of a digital signage network, as well as to seamlessly locate and oversee content for various screens.

### Extensible and inter-operable

Behind these fancy terms, we are talking about the possibilities of easily extending the platform as well as to interface with other systems. With an "API first" strategy underpinning our core services, it is possible to connect and integrate Castmill with any other services out there, so you can use Castmill for displaying business information in your office space as well as for example displaying airplane arrivals and departures airplane arrivals and departures at your preferred airport.

Additionally, we provide tools that simplify the creation of new widgets. These custom widgets can be used to display any variety of information linked to any data source, be it within your intranet or across the internet.

## Software Stack

For Castmill 2.0 we carefully selected the optimal software stack to align with our requirements and to construct the robust foundation described in our principles. We'll gradually reveal more specifics about each element in future posts, but for now, here's a preview:

## Typescript for all the client and device code.

As Castmill devices run HTML5 content, the client software is written in Typescript, so that we can easily run it on platforms such as Chromium, LG WebOS, Samsung Tizen, or any other platform that supports for web technologies. For platforms that do not provide native access to lower level resources such as WebViews in Android, it is easy to provide an integration layer written in native code.

## SolidJS and GSAP for Widgets

In Castmill 2.0 we have a very flexible template based widget system that allows the creation of new widgets without requiring any coding. This is only possible with the help of two amazing technologies, [SolidJS](https://www.solidjs.com/) for the componetization of templates and [GSAP](https://greensock.com/gsap/) for transitions and animations.

## Elixir for the server components

In legacy Castmill the server is written in Javascript on top of the NodeJS platform. This seemed like the right choice at the time, however, in our goal of increasing reliability we needed something better. We opted for Elixir, which is a language that runs on top of the Erlang platform. This technology, the backbone of Ericsson's telephone switches, is renowned for its unrivaled reliability and scalability.

## About the license

Castmill 2.0 is licensed under the GNU Affero General Public License V3 (AGPLv3). We opted for this license as it uniquely safeguards the work—our software—while offering a generous open-source agreement. This protects the software from potential misuse by large corporations. For instance, the AGPL helps us prevent other companies from:

- Offering Castmill as a service without contributing back to the open-source project or providing us with compensation.
- Integrally incorporating parts of Castmill into closed-source proprietary products.

## Business model

When we started playing with the idea of open sourcing our solution, one of the obvious questions to answer was how we would be able to generate income to run our business.

Our main motivation with this move is to give as much value as possible. At the end of the day, that should be the goal of any business. We believe on ourselves and the value of our technology, so we just want people and business to use it, but in order to achieve this goal, we need income to fund this endevour.

There will be 3 ways that will help us financing the future development of the platform:

### Managed versions of Castmill.

Althought you will be able to run your own instance of Castmill, you will have the option to leave the management to us. This hassle-free alternative is available for a competitive monthly fee.

### Custom development.

While Castmill offers a comprehensive SDK for creating your own custom widgets and integrations, there may be occasions where the expertise of a seasoned team can provide valuable support, ensuring you're covered at all times.

### Custom licenses.

The AGPL license is a truly Open Source license with all that it entails. This license protects us from cloud giants that could take advantage of our efforts, but also to keeps the software healthy, with better chances to get contributions and improvements over its lifetime.

For the legitimate cases where you absolutely cannot use AGPL licensed software we will be able to supply custom licenses for a certain fee.

## So whats next?

This announcement is just the start of the journey, in the following weeks and months we will actively be posting news about our progress as we reach our first production release. You are very welcome to start testing and give us feedback in our public [GitHub repository](https://github.com/castmill/castmill).
