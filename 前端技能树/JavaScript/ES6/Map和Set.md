### ES6新增数据类型：`Map`和`Set`

#### `Map`

* Map是一组键值对的结构，具有极快的查找速度
* 创建Map实例的方法：
```javascript
//在定义的过程中直接赋值，传入的参数为二维数组
var m1 = new Map(['zhuzhihao', 23], ['yangjiaru', 18]);

//先定义再赋值
var m2 = new Map();
m2.set('zhuzhihao', 23);
m2.set('yangjiaru', 18);
```
* 常见操作：
```javascript
var m = new Map();

m.set('zhuzhihao', 23); //赋值
console.log(m.get('zhuzhihao')); //23
console.log(m.has('zhuzhihao')); //true
//删除，若实例中有该key，则返回true，无则返回false
console.log(m.delete('zhuzhihao')); //true
```
* 对Map重复set相同的key；后者将会覆盖掉前者

#### `Set`

* Set与Map类似，也是一组Key的组合，但它不存储value，同时，存入的key不允许重复，若有重复，则过滤掉重复的key
* 给Set实例赋值时，传入的参数为数组：
```javascript
var s1 = new Set([1, 2, 3, 4, 4]);
s1; //Set{1, 2, 3, 4}

var s2 = new Set([1, 2, 3, '3']);
s2; //Set{1, 2, 3, '3'}
```
* 常见操作
```javascript
var s = new Set();
s.add(1);
s.add('2');
s.delete('2');
```

最后，再多说一句，ES6之前的JavaScript所定义的对象，其Key值只能是字符串，然而number或者其他数据类型作为Key值也是合理的，于是在ES6上特意定义了Map和Set类型，就是为了解决这个问题。