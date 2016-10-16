#### CSS Sprite
说到CSS Sprite（雪碧图），相信大家都不陌生，毕竟在很多网站中都有应用到雪碧图技术。

那么，什么是雪碧图技术呢？简单来讲，就是当一个网站出现很多类似icon的小图片时，我们不需要特地为了每一个小图片去加载对应的图片，完全可以将这些小图片通过PS手动拼成一个图片（当然更专业的做法是使用专业的CSS Sprite自动生成工具啦），让浏览器只加载一个较大的图片，再通过修改background-position属性去对图片做偏移，以显示想显示的那一部分图片。

* ###### 应用场景

一般而言，雪碧图更多地应用在静态图片上，即图片不随用户的操作而发生改变，同时，雪碧图更多地应用在小图片上，而大图片（如banner）一般用不上。为何？因为在搭建网站时雪碧图是一次性加载的，如果大图片也用上雪碧图技术，那么将会非常影响加载速度，而大图片一般而言更多的是按需加载。

* ###### 优点
有效减少http请求数，加速内容显示

* ###### 原理

控制一个层，可显示的区域范围大小，通过一个窗口，进行背景图的滑动

* ###### 代码举例

如下所示，可以实现一个网站的左侧菜单栏

[DEMO(点我可看效果)](./test.html)

```html
<html>
<head>
<meta charset="utf-8">
<style type="text/css">
    /* reset */
    div, ul, li, h3 {
        margin: 0;
        padding: 0;
    }
    
    h3 {
        font-size: 14px;
        font-weight: 400;
    }
    .cat {
        width: 150px;
        background: #f8f8f8;
        border: 1px solid #ccc;
    }
    .cat ul li {
        width: 90%;
        height: 31px;
        margin: 0 auto;
        list-style: none;
        line-height: 31px;
    }
    .cat ul li:not(:last-child) {
        border-bottom: 1px solid #ccc;
    }

    /* CSS Sprite */
    .cat i {
      float: left;
      background: url(./sidebar.png);
      display: block;
      width: 27px;
      height: 20px;
      margin: 5px 11px 0 11px;
    }
    .cat-1 i {
      background-position: 0 0;
    }
    .cat-2 i {
      background-position: 0 -24px;
    }
    .cat-3 i {
      background-position: 0 -48px;
    }
    .cat-4 i {
      background-position: 0 -72px;
    }
    .cat-5 i {
      background-position: 0 -96px;
    }
    .cat-6 i {
      background-position: 0 -120px;
    }
    .cat-7 i {
      background-position: 0 -144px;
    }
    .cat-8 i {
      background-position: 0 -168px;
    }
    .cat-9 i {
      background-position: -40px 0;
    }
</style>
</head>
<body>
<div class='cat'>
    <ul>
       <li class="cat-1">
           <i></i>
           <h3>服装内衣</h3>
       </li>
       <li class="cat-2">
           <i></i>
           <h3>鞋包配饰</h3>
       </li>
       <li class="cat-3">
           <i></i>
           <h3>运动户外</h3>
       </li>
       <li class="cat-4">
           <i></i>
           <h3>珠宝手表</h3>
       </li>
       <li class="cat-5">
           <i></i>
           <h3>手机数码</h3>
       </li>
       <li class="cat-6">
           <i></i>
           <h3>家电办公</h3>
       </li>
       <li class="cat-7">
           <i></i>
           <h3>护肤彩妆</h3>
       </li>
       <li class="cat-8">
           <i></i>
           <h3>母婴用品</h3>
       </li>
       <li class="cat-9">
           <i></i>
           <h3>其他</h3>
       </li>
    </ul>
</div>
</body>
</html>
```