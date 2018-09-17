# let 和 const

* let不存在变量声明提升

* 以下重复声明变量i是否会报错？

  ```javascript
  for (let i = 0; i < 3; i++) {
  	let i = 'abc';
  	console.log(i);
  }
  ```

  不会，因为设置声明的那一部分是一个父级作用域，循环体内部是一个单独的子作用域，并不冲突

* 暂时性死区
  以下代码在执行过程中会报错（`ReferenceError`），在ES6规范中，一旦区块中存在let和const命令，它们所声明的变量，在声明前不允许被使用，否则报错

  ```javascript
  var tmp = 123;
  if (true) {
    tmp = 'abc'; // ReferenceError
    let tmp;
  }
  
  // 不报错
  var x = x
  // ReferenceError: x is not defined
  let x = x;
  ```

* 以下函数调用后是否报错？

  ```javascript
  function func1(arg) {
    let arg; 
  }
  
  function func2(arg) {
    {
      let arg;
    }
  }
  ```

  func1报错，因为重复声明了变量，func2不报错，因为func2内又定义了一个子作用域，与外层不影响（块级作用域）

* 以下代码执行后，是否报错？

  ```javascript
  const a;
  a = 1;
  ```

  报错，const声明的变量必须立即初始化

* 以下代码执行后是否报错，为什么？

  ```javascript
  const a = 1;
  a = 2;
  
  const b = {};
  b.c = 2;
  ```

  变量a报错，变量b不报错，const保证的，是变量指向的内存地址所保存的值不被改动，若该值为基本类型值，则可以看作是个常量，若声明了一个对象或数组，内存地址所保存的，则是指向对象/数组实际数据的指针，它只能保证这个指针不变，但无法保证对象/数组的内部数据是否发生改变

* 以下代码的输出结果是？

  ```javascript
  let a = 1;
  console.log(window.a);
  // undefined
  ```

  结果是undefined，因为在ES6中，顶层对象的属性（浏览器的顶层对象是window，node则是global）与全局变量逐渐脱离，其中一个规定就是，let、const和class声明的全局变量，都不属于顶层对象的属性，而var和function则依旧保持旧版本的兼容

