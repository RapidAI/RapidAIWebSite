---
layout: post
title: "Hiding Git in Apache"
date: 2017-04-16 21:55:13 +0800
categories: notes
tags: apache2
comments: 1
---

Let's start with something light in this first post. I am using git for version control in one of my web applications, but the files in .git and .gitignore were accessible. I went searching for a solution and came accross [this](http://stackoverflow.com/questions/6142437/make-git-directory-web-inaccessible#answer-17916515).

The solution is simple, just append the following line in the **ROOT** of your webserver

{% highlight apache linenos %}
RedirectMatch 404 /\.git
{% endhighlight %}

Then reload apache and viola! All git related files in any subdirectories are now hidden from prying eyes.
