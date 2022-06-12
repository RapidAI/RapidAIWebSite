---
layout: post
title: "Jekyll Pagination in Other Pages"
date: 2017-05-27 22:44:36 +0800
categories: notes
tags: jekyll
comments: 1
---

There will often be use cases where you decide to use your root directory to serve a static home page (e.g. app landing page) and then a different page to list your blog posts. Jekyll's pagination plugin applies pagination to your root `index.html` by default and will spit warnings if you enabled it but no `index.html` file is found.

Let's say your directory setup is as below:

```
_layouts
_includes
_posts
_config.yml
Gemfile
Gemfile.lock
blog.md
index.md
about.md
```
and you would like to paginate in `blog.md`.

1. Create a subdir named `blog` and move `blog.md` into it.
2. Rename `blog.md` to `index.html`.
3. In _config.yml, add the following line (assuming you already added `paginate: page_num`):

{% highlight yaml %}
paginate_path: "/blog/page:num/"
{% endhighlight %}

That's it! Simple as that. Now your pagination path will be

```
blog/
blog/page2
blog/page3
```

You can change `page` into something else you like. Full reference [here](https://jekyllrb.com/docs/pagination/).