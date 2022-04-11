---
title: Complex layout
layout: "page.njk"
tags: demo
date: 2022-04-05
---

<script type="module">
    import {startDemo, getComplexDemo} from "/assets/castmill-demos.es.js"
    const demo = await getComplexDemo();
    const app = document.getElementById("demo")
    startDemo(app, demo)
</script>

This demo demonstrates complex layouts, text and more advanced transitions and animations.

{% include "_demo.liquid" %}
