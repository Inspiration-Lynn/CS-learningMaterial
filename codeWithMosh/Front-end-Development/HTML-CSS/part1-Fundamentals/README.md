# The Ultimate HTML5 & CSS3 Series: Part 1

## Getting Started

工具：

- vs code
  - Prettier - Code formatter
  - Live Server
  - Google chrome

## Web Development Fundamentals

### 1- Introduction

![image-20220302135236712](README.assets/image-20220302135236712.png)

### 2- Languages and Tools of Web Development

- **HTML**

  > Hypertext Markup Language：超文本标记语言
  >
  > 标记语言
  >
  > 负责内容和结构

- **CSS**

  > Cascading Stylesheet：层叠样式表
  >
  > Styling Language
  >
  > 负责样式

- **JavaScript**

  > 编程语言

### 3- How the Web Works

URL - **U**niform **R**esource **L**ocation

RESOURCES:

- Web pages (HTML documents)
- Images
- Video files
- Fonts

DOM - Document Object Model

### 4- Inspecting HTTP Requests and Responses

工具：chrome-开发者工具-Network

访问google.com

![image-20220302140920714](README.assets/image-20220302140920714.png)

![image-20220302141016218](README.assets/image-20220302141016218.png)

### 5- HTML Basics

```html
<!DOCTYPE html>
<html>
    <head> 
        <title>My first web page</title>
    </head>
    <body>
        <img src="images/profile.jpg">
        <p>@Inspiration-Lynn</p>
        <p>learning HTML</p>
    </body>
</html>
```

### 6- CSS Basics

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My first web page</title>
        <style>
            img {
                width: 100px;
                border-radius: 10px;
                float: left;
                margin-right: 10px;
            }
            .username {
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <img src="images/profile.jpg">
        <p class="username">@Inspiration-Lynn</p>
        <p>learning HTML with Mosh!</p>
    </body>
</html>
```

### 7- Formatting Code

Prettier & Format On Save

### 8- Inspecting Pages Using DevTools

![image-20220302160212266](README.assets/image-20220302160212266.png)

![image-20220302160645864](README.assets/image-20220302160645864.png)



### 9- Validating Web Pages

如果编写的网页不能正常显示，首先进行验证

- 验证html是否有错误：[validator.w3.org](https://validator.w3.org/) 

上传`index.html`

![image-20220302163127949](README.assets/image-20220302163127949.png)

- 验证css是否有错误：https://jigsaw.w3.org/css-validator/

## HTML Basics

### 1- Introduction

### 2- The Head Section

- the head section give browser and search engine information about the web page


> tip:  *! + tab* 创建html基础模板

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="HTML, CSS">
    <meta name="description" content="learning html and css...">
    <title>Document</title>
</head>
```

### 3 - Text

- 处理文本

> css处理样式

- 标题 - 用于构建文档结构（层次）

一个网页只能有一个一级标题

```html
<body>
    <h1>Heading 1</h1>
    <h2>HTML</h2>
    <p>HTML tutorial</p>
    <h3>code</h3>
    <h3>exercise</h3>
    <h2>CSS</h2>
    <p>CSS tutorial</p>
</body>
```

### 4 - Entities（HTML转义字符）

每个转义字符以`&`开头，以`;`结尾

特定字符：

- < - lt
- \> - gt
- 版权符号 - copy
- 不换行字符 - nbsp

```html
<p>I love to learn &lt;HTML&gt; &copy;</p>
```

### 5 - Hyperlinks

标签`a` - anchor

- 本地网页跳转
- 网页内部跳转
- 外部网站跳转

```html
	<a href="company/about.html">About Me</a>
    <a href="images/profile.jpg" download>my profile</a>
    <a href="#css-section">CSS</a>
    <a href="https://baidu.com" target="_blank">Baidu</a>
    <h2>HTML</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nobis neque dignissimos libero minima impedit.
        Itaque magni maiores ducimus quod eveniet dignissimos nam accusamus dolor voluptates eligendi libero a maxime
 	</p>
    <h2 id="css-section">CSS</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo officiis voluptatibus, quo, harum est, dicta
        repellat voluptatem at mollitia sit unde assumenda eveniet ab? Architecto maiores inventore, ex optio nobis
    </p>
    <a href="#">Jump to Top</a>
```

### 6 - Images

- 图片网站：[unsplash](https://unsplash.com/t/wallpapers)

CSS调整图片尺寸

```html
<head>
    <style>
        img {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
    </style>
</head>

<body>
    <img src="images/coffee.jpg" alt="two coffee">
</body>
```

在开发者工具中手动调整`object-fit`值，观察区别

![image-20220302181653623](README.assets/image-20220302181653623.png)

### 7 - Video and Audio

- 图片视频网站：[pexels](https://www.pexels.com/zh-cn/)

HTML中的布尔值属性，如`controls` 、`autoplay` 、 `loop`

- 查看不同浏览器是否支持某种html css特性：[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/)
  - 为不支持的浏览器提供替换文本

```html
<head>
    <style>
        video {
            width: 400px;
        }
    </style>
</head>

<body>
    <video controls src="videos/ocean.mp4">
        Your browser dosen't support videos.
    </video>
</body>
```

### 8 - Lists

嵌套方式创建多级列表

HTML有3种类型的列表：

- 无序列表 - `ul` 

  - 如：导航栏按钮

```html
  <head>
      <style>
          ul {
              list-style: none;
          }
      </style>
  </head>
  
  <body>
      <ul>
          <li>About Me</li>
          <li>Course
              <ul>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>Git</li>
              </ul>
          </li>
          <li>Subscribe</li>
          <li>Contact Me</li>
      </ul>
  </body>
```

- 有序列表 - `ol`
- 描述列表 - `dl`  
  - `dd `用来描述


```html
<body>
    <dl>
        <dt>Title</dt>
        <dd>The Ultimate HTML and CSS Course</dd>
        <dt>Author</dt>
        <dd>Mosh</dd>
        <dt>Skills</dt>
        <dd>HTML</dd>
        <dd>CSS</dd>
        <dd>Responsive Design</dd>
        <dd>Search Engine</dd>
    </dl>
</body>
```

### 9 - Tables

`tr`：table row

`th`：table header

`td`：table data cell

> 注意th和td区别，th居中且加粗

```html
<head>
	<style>
        table,
        td,
        th {
            border: 1px solid grey;
            border-collapse: collapse;
            padding: 5px;
        }

        tfoot {
            text-align: left;
        }
    </style>
</head>

<body>
    <table>
        <thead>
            <tr>
                <th colspan="2">Expenses</th>
            </tr>
            <tr>
                <th>Category</th>
                <th>Amout</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Marketing</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>Accouting</td>
                <td>$200</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th>$300</th>
            </tr>
        </tfoot>
    </table>
</body>
```

![image-20220302190517528](README.assets/image-20220302190517528.png)

### 10 - Containers

容器元素

通用容器 - Generic

- `<div>` - Block-level Element块级元素

  ```html
  <head>	
  	<style>
          .product {
              background-color: gold;
              width: 300px;
          }
      </style>
  </head>
  
  <body>
      <div class="product">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href="#">Link</a>
      </div>
      <div class="product">
          <p>Lorem ipsum dolor sit amet.</p>
          <a href="#">Link</a>
      </div>
  ```

- `<span>`- Inline Element行内元素

  - 常用于给文本加样式

  ![image-20220302194126952](README.assets/image-20220302194126952.png)

### 11- Semantic Elements（语义元素）

![image-20220302200853304](README.assets/image-20220302200853304.png)

Semantic container：

- `<article>`
  - An independent, self-contained content, eg. Forum post, Comments, Reviews, Product cards
- `<figure>`
- `<mark>`
- `<time>`

```html
<body>
    <article class="article">
        <h1>Heading</h1>
        <p>Published <time datetime="2021-01-01">January 1 2021</time></p>
        <p><mark>Lorem</mark> ipsum dolor sit amet consectetur adipisicing elit. A, voluptate!</p>
        <figure>
            <img src="images/coffee.jpg" alt="2 coffees">
            <figcaption>My coffee this monrning</figcaption>
        </figure>
    </article>
</body>
```

### 12- Structuring a Web Page

- `<main>` - 网页的主体内容（每个网页仅能有一个）
- `<section>` - 给相关内容分组
- `<header>` - 介绍性内容
- `<footer>`
- `<aside>` - 与主体不直接相关的内容

示例：

```html
<body>
    <header>
        <nav>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Product</h2>
            <article></article>
            <article></article>
            <article></article>
        </section>
        <section>
            <h2>Testimonial</h2>
            <article></article>
            <article></article>
        </section>
    </main>
    <aside></aside>
    <footer>
        <nav>
            <ul></ul>
        </nav>
    </footer>
</body>
```



