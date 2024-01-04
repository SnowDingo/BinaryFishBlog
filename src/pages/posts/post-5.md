---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Atcoder Begginers Contest 332 "T-shirts" explained'
pubDate: 2023-12-08
imgurl: '/image6.png'
description: 'A detailed guide to solving ABC 332 problem C.'
author: 'Snowdingo'
image:
    url: '/image6.png'
    alt: 'Atcoder ABC 332'
tags: ["blog", "Python", "Atcoder"]
---
## Problem
Here is a very very simplified version of this problem.
If it seems like it is too complicated, please read the official text by clicking the link below.
> - In N days, Takashi has to live his lif with M t-shirts and if he runs out of it, he has to buy special atcoder t-shirt(s).
> - He can buy special t-shirts in addition to normal one
> - String S, which contains information of his schedule of N day(s) is consisted with numbers from 0-2 with each different meaning.
> - If it's 0, Takashi will do nothing and wears no t-shirt. Plus, he will turn on the lundry machine which allow him to clean all his dirty laundris.
> - If it's 1, he goes to restrunt. He can wear either the special or non special one. Yet, he will not turn on the laundry machine.
> - If it's 2, he participates in Atcoder. He **must** wear special t-shirt in this day.
> - Afterall, how many special t-shirts does Takashi has to buy to live N days??

### Input
> N M
> S

### Output
> The number of special t-shirt(s) he need

### Website
https://atcoder.jp/contests/abc332/tasks/abc332_c

## How to solve
So here is an visual representation of this problem.
<img src="/public/guide1.png"  alt="Detailed Guide"/>

Before solving this problem, let's take a look at what is will be like to graph the example 1.
<img src="/public/guide2.png"  alt="Graph"/>