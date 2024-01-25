---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Hover dropshadow CSS animation in 3 minutes '
pubDate: 2023-01-21
imgurl: '/image9.png'
description: 'Dropshadow hover animation in CSS explained in 3 minutes.'
author: 'Dingo'
image:
    url: '/image9.png'
    alt: 'Title image'
tags: ["CSS", "Web", "Tech"]
---
# Introduction
In this guide, you will learn how to create your own custom CSS drop shadow animations. It is really easy and useful, so please read this guide until the very end.

## Finished Code
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="rNRmvyN" data-user="Fire-Dingo" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Fire-Dingo/pen/rNRmvyN">
  Untitled</a> by Fire Dingo (<a href="https://codepen.io/Fire-Dingo">@Fire-Dingo</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

# Step 1: HTML
First off, let's start by writing some HTML.
In this guide, we will use an `img` tag as our main object to apply animation.
You can either write the code entirely from scratch or copy the code I wrote below.
```html
<img src="https://assets.st-note.com/img/1703121447054-We6okqAydF.png?width=800&dpr=2" alt="sled" />
```
# Step 2: CSS
You can add shadows to an element(s) by using `box-shadow` property. in this guide, I will not explain about this property deeply, but you can check the details on the website pasted below.

https://developer.mozilla.org/ja/docs/Web/CSS/box-shadow

Firstly, let's start writing CSS for default conditions.
Properties that we need to define are **box-shadow and transition**.
Here is a sample program for the default status styling.
```css
img{
    transition: all .3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
```
With this code, your element(in this case, an image) should look similar to the photo below.

<img src="/example.png"  alt="The finished default styling"/>

After this, let's set up the hover animation.
In CSS you can use the `transition` property to apply simple animations easily.
The basic way to use transition property is,
```css
body{
    transition:all /* Duration */ /* Type of animation */;
}
```

If we apply this, the code will look something like this.

```css
img:hover{
    box-shadow: 0 4px 18px rgba(0,0,0,.4);
    transition: all .3s ease-in-out;
}
```

Now let's follow step by step on what this code does.
On the first line, the code sets the box shadow to the color rgba(0,0,0,0.4).
Compared to the default style, the hovered style will decrease the transparency of the shadow.

Secondly, the second line of the code applies ease in our transition for 0.3 seconds, which creates an animated effect of the shadow widening.
By applying both the transition and the box-shadow property in two states, the transition property can successfully create a rich animation without any conflict or issues.

# Finished code

```css
img{
    transition: all .3s ease-in-out;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
img:hover{
    box-shadow: 0 4px 18px rgba(0,0,0,.4);
    transition: all .3s ease-in-out;
}
```

# Conclusion
This guide explains the best way to add rich box-shadow animation to your website. Sharing our website through social media platforms will be greatly helpful.
Thank you for reading.

