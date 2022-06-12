---
layout: post
title: "Android Multilanguage Support for Local HTML"
date: 2017-05-22 15:17:57 +0800
categories: notes 
tags: android java
comments: 1
---

If your application only supports Android Lollipop and above, then the method is relatively straightforward. Just place your HTML files in res/raw, categorised with language identifiers.

```
res/raw (default)
res/raw-de
res/raw-ms
```

Then load the HTML as shown below

{% highlight java linenos %}
webView.loadUrl("file:///android_res/raw/your-html.html");
{% endhighlight %}

Android will automatically determine which HTML file to load.

However for Android KitKat and below, WebView is stricter and will only allow local HTML to be loaded from the assets folder. As a workaround, structure your assets folder as below:

```
assets/your-html.html
assets/your-html-de.html
assets/your-html-ms.html
```

Then define the following strings:
```
In values/strings.xml
<string name="local_html">file:///android_asset/your-html.html</string>

In values-de/strings.xml
<string name="local_html">file:///android_asset/your-html-de.html</string>

In values-ms/strings.xml
<string name="local_html">file:///android_asset/your-html-ms.html</string>
```

Then load the HTML as shown (assuming calling from an Activity):
{% highlight java linenos %}
webView.loadUrl(getString(R.string.local_html));
{% endhighlight %}

If your HTML contains UTF-8 characters, older versions of webview will display it as ASCII. So as a safeguard, add the following to your <head> section:
{% highlight html linenos %}
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
{% endhighlight %}