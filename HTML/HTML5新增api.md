# HTML5新增
### WebSocket
> * __概述__
	从本质上说，WebSocket是HTML5开始提供的一种基于TCP连接上进行全双工通讯的协议。浏览器可通过JavaScript向服务端发起建立websocket连接的请求，连接成功建立之后，服务器和浏览器就可以互相进行数据传送。
> * __与传统http协议的区别__
	[知乎：WebSocket 是什么原理？为什么可以实现持久连接？](https://www.zhihu.com/question/20215561)

---
### Web Storage
> * __localStorage__
	[MDN: Window.localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
> * __sessionStorage__
	[MDN: Window.sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) 
> * __区别__ 
	两者都允许你将数据储存在本地并进行读写操作，但存储在localStorage里面的数据没有过期时间，而储存在sessionStorage里面的数据则会在浏览器会话结束时被清除，即浏览器关闭时。

---