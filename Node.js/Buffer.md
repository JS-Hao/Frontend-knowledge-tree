## ArrayBuffer 与 TypedArray 的关系

本质上来说，ArrayBuffer 表示的是内存中的一段原始数据（每一个数据都是 8 位无符号整型数），但若想真正看得懂它或使用它，我们得“翻译”一下，而 TypedArray 就是一种“翻译”工具，它们根据每个元素的差异，分为 Int8Array、Int16Array、Uint8Array、Int32Array 等，
以 Uint8Array 和 Int16Array 为例，它们分别表示无符号 8 位、有符号 16 位数值，因此，假设我们有一段这样的 ArrayBuffer:

```
ArrayBuffer: length = 4
00000001
00010001
01100001
01001001
```

最终，Uint8Array 将“翻译”成

```
length = 4
00000001
00010001
01100001
01001001
```

而 Int16Array 则为

```
length = 2
0000000100010001
0110000101001001
```

一些有趣的示例图片：
[!https://cdn.yuque.com/yuque/0/2018/png/102778/1524404952751-a68e2169-8ad5-44f2-9bb0-d82b2aac06a4.png]

[!https://cdn.yuque.com/yuque/0/2018/png/102778/1524404976562-2475b200-3e23-4c76-bae3-cc5b94fe75c9.png]

[!https://cdn.yuque.com/yuque/0/2018/png/102778/1524404994731-063b4ad4-5eb5-47db-b64c-77719c87d958.png]

1. fs 读取出来的内容就是 buffer
2.
