# package 中的 module

1. ES5 的 CommonJS 模块规范，是实现不了 Tree Shaking 的（为什么？因为“得益于 javascript 灵活的访问对象属性方式”，exports 对象并不清楚到底哪些暴露方法被使用到了，于是全部代码都包含在 bundle 中）
2. 得益于 ES6 模块规范的定义，`import`和`export`都是静态的，于是在编译阶段即可清晰知道哪些方式被使用到，故可 Tree Shaking
3. pkg.main 放的是基于 es5 模块规范的 es5 语法的代码；而 pkg.module 则使用的是基于 es6 模块规范的 es5 语法的模块
4. pkg.module 是一种对 pkg.main 的补充增强：对于支持 Tree Shaking 的打包工具，优先使用 pkg.module 的版本，启动 Tree Shaking，而对于不支持的，则使用 pkg.main（向后兼容）

参考文章[聊聊 package.json 文件中的 module 字段](https://loveky.github.io/2018/02/26/tree-shaking-and-pkg.module/)
