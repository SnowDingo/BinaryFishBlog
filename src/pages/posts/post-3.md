---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Atcoder Begginers Contest 321 "Cutoff" explained'
pubDate: 2023-12-08
imgurl: '/Atcoder-guide.png'
description: 'A detailed guide to solving ABC 321 problem B.'
author: 'Snowdingo'
image:
    url: '/Atcoder-guide.png'
    alt: 'The full Astro logo.'
tags: ["blog", "Python", "Atcoder"]
---


## Problem
Here is a very very simplified version of this problem.
If it seems like it is too complicated, please read the official text by clicking the link below.


> - There is a test that has "N" rounds
> - For each round, there is a score range of 0-100
> - The overall score is the sum of scores without the maximum and minimum
> - The score of the "i" round is expressed as Ai
> - How many points must you get to exceed X points?
> - If you can't exceed X points even when you get 100, print -1


Input
N　X
A1 A2 A3 .....




https://atcoder.jp/contests/abc321/tasks/abc321_b


## Algorithm
So here is a detailed guide to this problem.
Firstly, one thing to keep in mind when solving this problem is that like the image below, our total score is the sum of scores without the maximum and minimum scores.
![](https://storage.googleapis.com/zenn-user-upload/fc9c44b5f8ac-20231022.png)
Basically the only thing we have to do is to test every possibility for score "i" from 0-100. If we have a required score that is lower than 100, that's great and we can just print the score "i". On the other hand, even if score i of 100 can't reach score X, we can then print -1.
![](/image2.png)
Below is the code that got AC.


## Example Code in Python
This is the code that got AC on this problem.
Feel free to read the comment that is attached to the code.
```py
# -*- coding: utf-8 -*-
#Get Inputs
N, X = map(int, input().split())
As = [int(x) for x in input().split()]
#Sort As from the lowest to the highest
As = sorted(As)
#１００回繰り返す
for x in range(0,101):
    scorenow = As[0:len(As)]
    #↑Reset score to the default score
    scorenow.append(x)
    #Delete the maximum scores from total
    scorenow.remove(max(scorenow))
    #Then delete the minimum
    scorenow.remove(min(scorenow))
    #If score is bigger or equal to x, print the scoreneeded and exit
    if sum(scorenow) >= X:
        print(x)
        exit()
    else:
        continue
#If not, print negative one
print(-1)
```