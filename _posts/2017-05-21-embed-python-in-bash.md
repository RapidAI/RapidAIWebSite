---
layout: post
title: "Embedding Python Snippets in Bash Scripts"
date: 2017-05-21 00:27:39 +0800
categories: notes
tags: python bash
comments: 1
---

In my opinion, certain operations are better performed using certain scripting languages. Taking Python and Bash as context, file deletion, moving or processing (zip, tar etc.) is easily achieved using Bash. Not to say that it cannot be done using Python, but to do so requires quite some documentation lookup and usage of various modules. On the other hand, string operations such as splitting, joining and formatting can be accomplished more naturally (and easily? String slicing in Bash is rather confusing IMHO) in Python.

Therefore while Bash scripting, there will be times where a random light bulb pops up and goes something like "Hey! I can do this much faster in Python". So as much as I wanted to stick to pure Bash, I finally gave in due to time consumption and set out for my journey of "hybrid" scripting. I started off using Python scripts separately and then called them in the main Bash script. However as time goes by, I find that small snippets are often not worth the separate maintenance. Thus inspired by [this](http://bhfsteve.blogspot.my/2014/07/embedding-python-in-bash-scripts.html), I began embedding small snippets of Python in my Bash script, which really made my life easier.

The method is pretty simple, using the snippet was as easy as calling a Bash function. The Python snippet is written in a Bash HEREDOC as shown below:

{% highlight bash linenos %}
function embed() {
python3 -c <<EOF
print('I am using Python!')
EOF
}
{% endhighlight %}

Since Python is a whitespace sensitive language, do be cautious of unnecessary whitespace. The standard practice in Python is to use 4 spaces/tab to indent code, but I found out that any amount of whitespace is actually acceptable. Just keep the number constant. For example, if you start with 1 space for a level 1 indent, use 2 spaces for a level 2 indent and so on.

{% highlight bash linenos %}
function embed() {
python3 -c <<EOF
if True:
 for i in range(3):
  print(i)
EOF
}
{% endhighlight %}

Finally to supply arguments to your snippet, write your function as below:

{% highlight bash linenos %}
function embed() {
python3 -c "$1" "$2" <<EOF
import sys
print('First argument: {}'.format(sys.argv[1]))
print('Second argument: {}'.format(sys.argv[2]))
EOF
}
{% endhighlight %}

and call the function

{% highlight bash linenos %}
embed "first" "second"
{% endhighlight %}

Remember to import the sys module and note that user supplied arguments start from index 1! Quoting your Bash function arguments (i.e. "$1") is also crucial if you have spaces in your agruments (e.g. "/path/here/file name").