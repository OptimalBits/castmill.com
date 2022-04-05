---
title: Simple layout
layout: "page.njk"
tags: demo
---

<script type="module">
    import {startDemo, getSimpleDemo} from "/assets/castmill-demos.es.js"
    const demo = await getSimpleDemo();
    const app = document.getElementById("demo")
    startDemo(app, demo)
</script>

This demo demonstrates a simple sequence of images and videos without any fancy effects or widgets.

{% include "_demo.liquid" %}
