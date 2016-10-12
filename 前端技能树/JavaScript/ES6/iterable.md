### iterable类型

在ES6中，引入了一个新的类型，叫iterable，我们所熟知的Array，以及ES6新定义的Map和Set类型，均属于iterable类型，在遍历元素中带来了很大的遍历。

#### 遍历方法：for ... of

例：
```javascript
var a = ['A', 'B', 'C'];
var b = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
var c = new Set(['A', 'B', 'C']);

//遍历
for (var x of a) {
    console.log(x);
}
for (var y of b) {
    console.log(y[0] + '=' + y[1]);
}
for (var z of c) {
    console.log(z)
}
```
结果依次是：
A B C 1=x 2=y 3=z A B C

对于for...of而言，它仅仅只是遍历集合本身的元素，而不会像for...in一样去遍历其他的属性，因此效率更高，同时，iterable类型含有forEach方法（ES5.1引入），也可以遍历集合的元素
```javascript
//Array
a.forEach(function(element, index, arr) {
    //element指向每一个元素的值
    //index指向每一个元素的索引
    //arr指向该数组
    //code
});
//Map 
b.forEach(function(element, index, map) {
    //code
});
//Set
c.forEach(function(element, element, set) {
    //由于Set没有索引，所以前两个参数都是element
    //code
});
```