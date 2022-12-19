---
title: Videowall demo
layout: "page.njk"
tags: demo
date: 2022-12-18
---

<script type="module">
    import {startMosaicDemo, getVideoWallDemo} from "/assets/castmill-demos.es.js"
    const demo = await getVideoWallDemo();
    const app = document.getElementById("demo")
    startMosaicDemo(app, demo)
</script>

Castmill allows you to create videowalls (also called mosaics) of any size and configuration. You have the option to use an external HDMI splitter or the built-in videowall feature. To use the built-in feature, you can stack screens as desired and Castmill will handle the rest.

You can choose to show a separate content on every screen or use all the screens to display a much larger video or any other content.

{% include "_demo.liquid" %}
