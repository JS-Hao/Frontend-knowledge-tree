const fs = require("fs");
const text = fs.readFileSync("./data.txt"); // text => buffer

// const buffer = new ArrayBuffer(8);
// console.log("buffer", buffer);

var buf = Buffer.from("211sadjfksdjfkljsdfkljsdklfj1", "base64");

console.log("buffer", buf.length);

console.log("bufArr", buf.buffer);

// console.log("utf8");
// console.log(text.toString("utf8"));

// console.log("base64");
// console.log(text.toString("base64"));

// console.log("是否相等");
// console.log(text.toString("utf8") === text.toString("base64"));

// var utf8Str = text.toString("utf8"); // buffer => str
// var base64Str = text.toString("base64"); // buffer => str

// const buf = Buffer.from(utf8Str, "base64"); // utf8 str => buffer base64
// console.log("buf", buf.toString("base64")); // base64buffer => base64 str
// console.log("base64Str", base64Str);

// console.log(buf.toString("base64") === base64Str);

// const buf = Buffer.from(text, "base64");

// console.log("text", text);
// console.log("buf", buf.toString("base64"));
