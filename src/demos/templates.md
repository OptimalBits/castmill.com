---
title: Templates
layout: "page.njk"
tags: demo
date: 2022-12-18
---

<script type="module">
    import {startDemo, getTemplatesDemo} from "/assets/castmill-demos.es.js"
    const demo = await getTemplatesDemo();
    const app = document.getElementById("demo")
    startDemo(app, demo)
</script>

In this demonstration, we will use the template engine to show a couple of examples. Castmill allows you to create templates that display dynamic content. The engine has various features, such as animations, smart lists, and the ability to easily integrate with data sources.

{% include "_demo.liquid" %}
