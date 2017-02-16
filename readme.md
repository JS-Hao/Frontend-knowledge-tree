# 前端体系知识梳理

> 前言：暂无

---
## HTML
#### HTML5
###### WebSocket
> * __概述__
>   从本质上说，WebSocket是HTML5开始提供的一种基于TCP连接上进行全双工通讯的协议。浏览器可通过JavaScript向服务端发起建立websocket连接的请求，连接成功建立之后，服务器和浏览器就可以互相进行数据传送。
> * __与传统http协议的区别__
>   [知乎：WebSocket 是什么原理？为什么可以实现持久连接？](https://www.zhihu.com/question/20215561)

###### Web Storage
> * __localStorage__
>   [MDN: Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
> * __sessionStorage__
>   [MDN: Window.sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) 
> * __区别__ 
>   两者都允许你将数据储存在本地并进行读写操作，但存储在localStorage里面的数据没有过期时间，而储存在sessionStorage里面的数据则会在浏览器会话结束时被清除，即浏览器关闭时。

---
## CSS
#### CSS模块化
#### 盒模型
#### 选择器

---
## JavaScript
#### 闭包
#### 作用域与作用域链
#### 原型与继承
#### 内存泄漏
#### 事件模型
#### 事件委托
#### 性能优化
#### 跨域
#### 热更新
#### 前端路由
> 前端路由主要有两种实现方式，第一种是通过```history```对象进行控制，与它新增的两个api```history.pushState```和```history.replaceState```有着重要的关联；第二种则是通过hash实现。
>
> * __history__
>
>   这篇文章[history对象--JavaScript标准参考教程](http://javascript.ruanyifeng.com/bom/history.html#)可以使我们很好地再次回顾```history```对象。我们可以通过```history.pushState```与```history.replaceState```去控制标签页的地址改变而不引起页面刷新，再配合```popstate```事件与```event.state```的合理使用，即可实现前端路由
>
>   ```html
>   <!DOCTYPE html>
>   <html>
>   <head>
>   	<title>Line Game -5</title>
>   </head>
>   <body>
>   <p>You are at coordinate <span id="coord">5</span>on the line</p>
>   <p>
>   	<a href="?x=6" onclick="go(1); return false;">Advance to 6</a> or 
>   	<a href="?x=4" onclick="go(-1); return false;">retreat to 4</a>?
>   </p>
>   <script type="text/javascript">
>   	var currentPage = 5;
>   	function go(d) {
>   		setupPage(currentPage + d);
>   		history.pushState(currentPage, document.title, '?x=' + currentPage);
>   	}
>   	window.onpopstate = function(event) {
>   		setupPage(event.state);
>   		console.log(event.state);
>   	}
>   	function setupPage(page) {
>   		currentPage = page;
>   		document.title = 'Line Game -' + currentPage;
>   		document.getElementById('coord').textContent = currentPage;
>   		document.links[0].href = '?x=' + (currentPage + 1);
>   		document.links[0].textContent = 'Advance to ' + (currentPage+1);
>   		document.links[1].href = '?x=' + (
>   			currentPage - 1);
>   		document.links[1].textContent = 'retreat to ' + (currentPage-1);
>   	}
>   </script>
>   </body>
>   </html>
>   ```
>
> * __hash__ 
>
>   当我们通过```window.location```去处理hash的变化时并不会引发页面的重新渲染，而是当作新页面加到历史记录中。每当hash变化时会触发```hashchange```事件，只要我们在```hashchange```事件的回调函数里进行相关处理（如通过ajax请求，改变页面内容），即可实现前端路由控制
>
>   ```html
>   <!DOCTYPE html>
>   <html>
>   <head>
>   	<title>hash router</title>
>   </head>
>   <body>
>   <ul>
>   	<li><a href="#/">turn white</a></li>
>   	<li><a href="#/orange">turn orange</a></li>
>   	<li><a href="#/purple">turn purple</a></li>
>   </ul>
>   <script type="text/javascript">
>   	function Router() {
>   		this.routes = {};
>   		this.currentUrl = '';
>   	}
>   	Router.prototype.route = function(path, callback) {
>   		this.routes[path] = callback || function(){};
>   	}
>   	Router.prototype.refresh = function() {
>   		this.currentUrl = location.hash.slice(1) || '/';
>   		this.routes[this.currentUrl]();
>   	}
>   	Router.prototype.init = function() {
>   		window.addEventListener('load', this.refresh.bind(this), false);
>   		window.addEventListener('hashchange', this.refresh.bind(this), false);
>   	}
>   	window.Router = new Router();
>   	window.Router.init();
>   	var content = document.querySelector('body');
>   	function changeBgColor(color) {
>   		content.style.backgroundColor = color;
>   	}
>   	Router.route('/', function() {
>   		changeBgColor('white');
>   	});
>   	Router.route('/orange', function() {
>   		changeBgColor('orange');
>   	});
>   	Router.route('/purple', function() {
>   		changeBgColor('purple');
>   	});
>   </script>
>   </body>
>   </html>
>   ```
>
> 关于更多更详细的细节，可以查看这篇文章——[前端路由的两种实现原理](https://segmentfault.com/a/1190000007238999)

#### 前端模块化
> 前端模块化，提得最多的莫非CommmonJS，AMD，CMD，UMD这些了，这篇文章对它们做了较为详细的介绍：[AMD, CMD, CommonJS和UMD](https://segmentfault.com/a/1190000004873947)，但个人感觉这篇博文还待完善（如AMD与CMD的区别这部分讲得过于粗略）

---
## 流行框架
#### React
###### 虚拟DOM
> React之所以性能如此之高，与其提出的虚拟DOM有着非常大的关联。读完下面推荐的这两篇博文，相信你对虚拟DOM的运行机制会有一定的认识。
> * [《深入浅出React（四）：虚拟DOM Diff算法解析》](http://www.infoq.com/cn/articles/react-dom-diff)
> * [深度剖析：如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13) 
>
> 这两篇博文在diff算法的比较上存在一定的分歧，第一篇文章认为，在比较同层节点时，若两者不相同，则遵循“不同的组件产生不同的DOM结构”这一原则，对其直接进行销毁->再构建的操作，若被删除的节点存在子节点，这些子节点也无须再进行后续的比较。而第二篇文章则认为，两个树会采取深度优先遍历的方式比较，因此，其比较方式与前者产生了较大的分歧，至于React到底是如何进行diff操作的，只能阅读官方给出的源码了:)
>
> 当然，千万不要产生“虚拟DOM就是快”，“虚拟DOM比原生快”这种常见的误解，尤大大对此问题发表了自己的见解：[知乎：网上都说操作真实 DOM 慢，但测试结果却比 React 更快，为什么？](https://www.zhihu.com/question/31809713)  
>
> 

#### Vue
###### 虚拟DOM
#### 其他

---
## 浏览器机制
#### 渲染机制
#### 重绘与回流

> 关于重绘与回流，可以查看这篇文章：[页面重绘和回流以及优化](http://www.css88.com/archives/4996)   

---
## 计算机网络
#### 计算机分层
#### 网络协议
> [写给那些让我糊里糊涂的HTTP、TCP、UDP、Socket](http://blog.csdn.net/xijiaohuangcao/article/details/6105623) 

#### http状态码
> * __http状态码分类__
> 	http状态码表示服务器对请求的响应情况，主要分为以下几种情况：
> 	* 1**：这类响应是临时响应，只包含状态行和某些可选的响应头信息，并以空行结束
> 	* 2**：表示请求成功
> 	* 3**：表示重定向
> 	* 4**：表示客户端错误
> 	* 5**：表示服务端错误
> * __常见状态码__
> 	* 100(continue)
> 		客户端应当继续发送请求。这个临时响应是用来通知客户端，它的部分请求已经被服务端		   接收了。
> 	* 200(OK)
> 		表示请求成功。请求所希望的响应头或数据体将随此响应返回。
> 	* 202(Accepted)
> 		服务器已接收请求，但尚未处理。
> 	* 204(No-Content)
> 		服务器成功处理了请求，但不需要返回任何实体内容。
> 	* 205(Reset-Content)
> 		服务器成功处理了请求，且没有返回任何内容。但是与204响应不同，返回此状态码的响应要求请求者重置文档视图。该响应主要是被用于接受用户输入后，立即重置表单，以便用户能够轻松地开始另一次输入
> 	* 206(Partial-Content)，服务器已经成功处理了部分GET请求
> 	* 301(Moved-Permanently)，永久性地重定向
> 	
> 	
