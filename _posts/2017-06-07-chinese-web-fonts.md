---
layout: post
title: "Chinese Web Fonts"
date: 2017-06-07 11:07:02 +0800
categories: notes
tags: css html
comments: 1
---

Recently I had to design a multilingual website which involves Chinese. Unlike English (or any Latin script based language), each Chinese character has its own meaning, which means a large character set is required. This causes Chinese fonts to be about [3-7 MB per font weight](https://webdesign.tutsplus.com/articles/the-complete-beginners-guide-to-chinese-fonts--cms-23444), which would greatly increase the load time. Therefore while Latin script languages have a plethora of web fonts that can be applied, the selection of Chinese fonts is rather limited.

Since my options are already limited, I opted to go for web safe Chinese fonts instead. Unfortunately even this is not well documented, until I came across [this](http://daoinsights.com/chinese-web-fonts-part-1/). I ended up using the following line:

{% highlight css %}
font-family: (Insert your custom web fonts here), Arial, Helvetica, "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
{% endhighlight %}

You might note that all the Chinese fonts are listed towards the end. This is because the Latin characters in Chinese fonts are rendered quite badly (i.e. looks bad), so always remember to put your custom fonts right in front.