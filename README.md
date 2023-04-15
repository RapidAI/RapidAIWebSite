#### 说明
- 这是RapidAI-team主站的仓库
- 主题来自：[tella](https://github.com/opera7133/tella)
- 自动提交到`gh-pages`分支时，自定义设置的域名会失效，所以选择将public文件放到当前分支下

#### 修改主题，支持mermaid
- 手动下载`mermaid.min.js`文件到放到`themes/tella/static/js/mermaid.min.js`下。下载地址[mermaid.js](https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js)
- 在`layouts/partials/head.html`添加以下代码
  ```html
    <script src='{{ "/js/mermaid.min.js" | relURL }}'></script>

    <script>
        // 自定义mermaid配置
        const config = {
            startOnLoad:true,
            theme: 'forest',
            themeVariables: {
                lineColor: "#fafafa"    // 由于paperMod的代码块背景是黑色的，这里将线条设置为白色
            },
            flowchart: {
                useMaxWidth:false,
                htmlLabels:true
                }
        };
        mermaid.initialize(config);
        // 需要注意的是，要将初始化代码放到 window.onload 回调函数里面才有用
        // 否则会因为在html元素加载前进行初始化，找不到元素而失效
        window.onload = () => {
            window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
        }
    </script>
  ```
