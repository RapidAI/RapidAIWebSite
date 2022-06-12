---
layout: post
title: "Python List Call by Reference"
date: 2017-04-17 22:08:07 +0800
categories: notes
tags: python
comments: 1
---

I was writing a class in Python and there was a class variable that was supposed to be a copy of a global predefined list.

{% highlight python linenos %}
FOO = ['a', 'b', 'c']

class Test(object):
    def __init__(self):
        self.foo = FOO
{% endhighlight %}

At first everything was alright, until when there were multiple instances of the `Test` class. The initial value of `self.foo` was not constant, which came to my surprise since that variable is supposed to be initialised to `FOO` during creation.

Then I realised I forgot about the difference between call by reference and value. In Python, doing

{% highlight python linenos %}
foo = ['a', 'b', 'c']
bar = foo
{% endhighlight %}

means `bar` is just a pointer to `foo`, so any changes done to `foo` will be reflected in `bar` or vice versa. If you want `foo` and `bar` to be separate, you need to make `bar` a copy of `foo`. The simplest way is as below:

{% highlight python linenos %}
bar = list(foo)
{% endhighlight %}

However, if `foo` is a nested list, you will need to perform a deeper copy:

{% highlight python linenos %}
import copy
bar = copy.deepcopy(foo)
{% endhighlight %}

This concept applies to most mutable objects as well, such as dictionaries and user defined classes.