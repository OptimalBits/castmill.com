---
title: Demos
description: This is our showroom with demos of some stuff you can easily do with Castmill.
layout: "page.njk"

cover: /images/demo.jpg

pagination:
  data: collections.demo
  size: 1
  alias: demos

eleventyNavigation:
  key: Demos
  order: 6
---

Welcome to the demos section. In these pages we will show-case some examples of what Castmill can do. Everything you see in these demos and much more can be run on your displays. If there is a demo missing something you would like to see, please do not hesitate to [contact us](mailto:support@castmill.com).

<ol>
{% for demo in collections.demo | reverse %}
  <li><a href="{{ demo.url | url }}">{{ demo.data.title }}</a></li>
{% endfor %}
</ol>

<!--
Pagination not workinf for some reason
<ol>
{% for demo in demos %}
  <li><a href="{{ demo.url | url }}">{{ demo.data.title }}</a></li>
{% endfor %}
</ol>

{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}

-->
