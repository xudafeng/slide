JavaScript/NodeJS 基础
=====================

基础篇
======

<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png" height="163"/>

## Nodejs 简介

- Node.js 诞生于 2009 年，是 JavaScript 在服务器端的一个运行环境。
- 它的 JavaScript 解释器，采用了 Google 公司的 V8 引擎。
- 主要用于方便地搭建响应速度快、易于扩展的网络应用。
- Node.js 使用事件驱动，非阻塞 I/O 模型使其轻量和高效。

## 基本使用

例如运行当前目录下的 example.js 文件，可以这样写。

```bash
$ node ./example.js
```

## 跳个舞

```bash
$ node ./fun-dance.js
```

## REPL 环境

直接在命令行执行 `node` 命令，进入 `REPL`（Read–eval–print loop，"读取-求值-输出"循环） 环境。

```bash
$ node
> 1 + 2
> 3
```
## 语法

熟悉 Java、C 和 Perl 这些语言的开发者会发现 JavaScript
的语法很容易掌握，因为它借鉴了这些语言的优秀语法。

- 区分大小写
- 每行结尾的分号加分号
- 注释
    - 单行注释以双斜杠开头（//）
    - 多行注释以单斜杠和星号开头（`/*`），以星号和单斜杠结尾（`*/`）

## 关键字和保留字

关键字列表：break、case、catch、continue、default、delete、do、else、finally、for ...

保留字列表：abstract、boolean、byte、char、class、const、debugger、double、enum、export、extends、final、float、goto、implements、import ...

## 变量

变量声明

```js
var test = 'hi';
var test = 'hi', age = 25;
```

JavaScript 是**弱类型**的，所以无需明确的类型声明。

- 与 Java 和 C 不同，js中的变量无特定的类型，定义变量时只用 var 运算符，可以将它初始化并能改变为任意类型的值。如：

```js
var num = 25;
num = true;  //更改为bool类型
```

## 值

### 基本数据类型

* number 、string 、undefined 、null、boolean

### 引用类型

* Object、Array、Date、Function、RegExp、String、Number、Boolean

### 区别

基本类型的变量中存储的是简单的数据段，而引用类型变量存储的是指向对象的引用

## number

定义

```js
var num = 8.6;
```

JavaScript 中 number 其实都是浮点数，那么问题来了

```js
0.3 === 0.1 + 0.2;
```

常用方法：toFixed()、toString() [更多方法参考](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## string

定义

```js
var str = 'abc123';
```

字符串拼接：

```js
str + 'b';
```

常用方法 : indexOf() 、replace() 、split() ... [更多方法见](http://www.w3school.com.cn/jsref/jsref_obj_string.asp)

## null

用于表示尚未存在的对象

```js
var obj = null;
```
## undefined

任何没有被赋值的变量都有 undefined 值

```js
var a;
typeof a;

var b = {};
b.xx;
```

## boolean

有两个值，true 和 false

```js
var a = false;
```

## Object

Object 是一个属性的集合，键值对

所有对象都由 Object 继承而来，Object 对象中的所有属性和方法都会出现在其他对象中

常用属性/方法：

* constructor
* prototype
* hasOwnProperty()
* isPrototypeOf()
* toString()
* valueOf()

## Array

* 语法：

```js
var a = [];
var b = ['facebook', 'google'];
```

* 常用属性
  * length 设置或返回数组中元素的数目

## forEach(callback[, thisArg])

```js
var a = ['xx', 'yy'];
a.forEach(function(item, index) {
  console.log(item, index);
});
```

## join, push

join([separator = ','])

```js
var a1 = ['a', 'b'];
a1.join('|');
```

push(element1, ..., elementN) 

```js
var a1 = ['a', 'b'];
var a2 = a1.push('c');
a1;
a2;
```

* [更多手册](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Date

```js
var d = new Date();
d.getFullYear();
```

设置、获取时间方法
* getDate()
* getDay()
* getMonth()
* getFullYear()
* setDate()
* 更多方法见 http://www.w3school.com.cn/jsref/jsref_obj_date.asp

## RegExp

* 语法

```js
/pattern/flags  //直接量语法
new RegExp(pattern[, flags])  //创建 RegExp 对象的语法
```

* 实例

```js
var a = /\d/g;
var b = new RegExp('\\d', 'g');
```

* 参考：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

## 类型转换 toString

Boolean 值、数字和字符串的原始值都是伪对象，对象就都继承了 Object 的 toString() 方法

```js
var a = false;
a.toString();

var b = 10;
b.toString(2);
[1, 2].toString();
```

## 类型转换 parseInt/parseFloat

* parseInt(string, radix); string 可以是非10进制形式， radix 默认是10

```js
parseInt('0xA');
parseInt('a1', 16);
parseInt('a1');
parseInt('1a');
```

0位是数字，查到非数字为止，否则返回 NaN

* parseFloat(string) ; 与 parseInt 类似，但 string 必须是10进制形式
* Number(value)
* String(value)

参考：http://www.w3school.com.cn/js/pro_js_typeconversion.asp

## 操作符

* 一元操作符
    ++ -- - +
* 位操作符
    ~ & | ^ << >> >>>
* 布尔操作符
    ! && ||
* 乘性操作符 * / %
* 加性操作符 + -
* 关系操作符
    < > <= >=
* 相等操作符
    == != === !==
* 条件操作符
    var max = (num1 > num2) ? num1 : num2
* 赋值操作符
    = *= /= %= += -= <<= >>=
* 逗号操作符
    var num = (5, 1, 4, 8); // num 的值为8

## ==、!=、===、!==

思考以下结果

```js
'5' == 5;
'5' === 5;
```

`===、!== ,不会做类型转换, 约定等性判断必须用全等/非全等号`

## 逻辑与/逻辑或 - 短路求值

只要最终的结果已经可以确定是真或假，求值过程便终止，两种短路场景

```js
true || anything;
false && anything;
```

* 例子

```js
false && console.log(1);
```


# 控制语句

## if 语句

```js
if (i > 30) {
  console.log('大于 30');
} else if (i < 0) {
  console.log('小于 0');
} else {
  console.log('在 0 到 30 之间');
}
```

## switch 语句
 switch 语句是 if 语句的兄弟语句。

```js
switch (i) {
  case 20:
    console.log('20');
    break;
  case 30:
    console.log('30');
    break;
  default:
    console.log('other');
    break;
}
```


## while、do-while 语句

do-while 语句。 do-while 语句是后测试循环，即退出条件在执行循环内部的代码之后计算。这意味着在计算表达式之前，至少会执行循环主体一次。

```js
var i = 0;
do {
  i += 2;
} while (i < 10);
```

while 语句。 while 语句是前测试循环。这意味着退出条件是在执行循环内部的代码之前计算的。因此，循环主体可能根本不被执行。

```js
var i = 0;
while (i < 10) {
  i += 2;
}
```

## for、for-in 语句

for 语句是前测试循环，而且在进入循环之前，能够初始化变量，并定义循环后要执行的代码。

```js
var iCount = 6;
for (var i = 0; i < iCount; i++) {
  console.log(i);
}
```

for-in 语句是严格的迭代语句，用于枚举对象的属性。

```js
for (var i in global) {
  console.log(i);
}
```

## break、continue 语句

break 和 continue 语句。 它们的不同之处：break 语句可以立即退出循环，阻止再次反复执行任何代码。而 continue 语句只是退出当前循环，根据控制表达式还允许继续进行下一次循环。

```js
var iNum = 0;
for (var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    //break;      //输出什么？
    //continue;   //输出什么？
  }
  iNum++;
}
console.log(iNum);
```

## 函数

函数在 JavaScript 非常重要

- 我们能像传递变量一样传递函数
- 在函数中返回函数
- 在其他函数中使用函数


## 函数定义与调用
函数是由这样的方式进行声明的：关键字 function、函数名、一组参数，以及置于括号中的待执行代码。

```js
function say(name, msg) {
  console.log('Hello ' + name + msg);
}
say('David', ' Nice to meet you!') //调用函数

//函数直接量
var sayHi = function(){ };
sayHi();
```

## 函数参数
在 JavaScript 中无论是基本类型还是引用类型，函数参数都是按值传递的，先看基本类型：

```js
function test(num) {
  num += 10;
  return num;
}
var num = 10;
var res = test(num);
console.log(num);
console.log(res);
```

## 函数参数

再看引用类型：

```js
function setName(obj) {
  obj.name = 'facebook';
}
var company = {
  name: 'google'
};
setName(company);
console.log(company.name);
```
## 函数参数

总的来说，基本类型的参数复制的是具体的值，而引用类型的参数复制的是这个对象的引用。

## 回调函数

- 是把一个函数作为参数传递。
- 回调函数，也被称为高阶函数，是一个被作为参数传递给另一个函数的函数，回调函数在另一个函数中被调用。

```js
function fn(arg, callback) {
  var num = arg * arg;
  callback(num);
}
fn(2, function(result) {
  console.log(result);
});
```

## 函数返回值

函数如何返回值

```js
function sum(num1, num2) {
  return num1 + num2;
}
```

函数只需要使用 return 运算符后跟要返回的值即可。 与在 Java 中一样，函数在执行过 return 语句后立即停止代码。因此，return 语句后的代码都不会被执行。

函数默认返回值是什么？

## JavaScript 进阶

我们会通过以下几个个方面来讨论 JavaScript 高级特性

0. 对象
0. this
0. 原型
0. 构造函数
0. 原型链
0. 作用域
0. 闭包

以上7个方面，前面是理解后面的基础，在构造函数和继承理解遇到困惑时请回顾前面两个概念来帮助理解。

## 对象

> 首先要有个对象

### 典型对象

```js
var jane = {
  name: 'Jane',
  describe: function() {
    return 'Person named ' + this.name;
  }
};
```

## 对象的“.”操作符

* 读取属性

```js
jane.name
jane.describe
```

* 调用方法

```js
jane.describe();
```

* 设置属性值

```js
jane.name = 'John';
```
## 对象的“[]”操作符

"[]"操作符让我们可以使用表达式来使用对象的属性和方法

```js
obj['some' + 'Property'] || obj[propKey];    //表达式 || 变量
```

操作符内部强制转换成字符串

```js
obj[3 + 3];  // key: 强制转换为 '6'
```

调用对象方法

```js
obj['myMethod']();
```

设置属性或方法

```js
obj['anotherProperty'] = 'def';
```

## 删除属性

两种删除属性或方法的方式,如果我们删掉一个对象属性，那么它将在对象中彻底删除。

```js
delete obj.hello;
delete obj['hello'];
```
## 一个构造函数例子

```js
function Company(name) {
  this.name = name;
}
Company.prototype.showCompany = function() {
  console.log(this.name);
};

var google = new Company('谷歌');

google.showName();   //输出什么？
```

## this

this 是函数的隐含参数`，在 JavaScript 中，this 指向函数执行时的当前对象。

- 严格模式下，this 默认值为 ’undefined‘

```js
function bankCard() {
  'use strict';
  return this;
}
bankCard() === undefined
```
- 对象方法：this 指向该方法所在的对象

```js
var obj = {
  method: bankCard
};

obj.method() === obj
```

## this 改变

```js
var work = {
  money: 9999,
  goodJob: function() {
    return ++this.money;
  }
};

var func = work.goodJob;
func();

work.goodJob();
```

## this

怎么会这样？

这里很容易混淆，在调用 func() 时，this 已经指向 global 对象了


## 思考题

```js
var nameObj = { 
  name: 'Tom',  
  showName: function() {  
    console.log(this.name);  
  }, 
  waitShowName: function() {  
    this.showName();
    setTimeout(function() {
      this.showName();
    }, 1000);
  }
};

nameObj.waitShowName();
```

## 维护 this

约定上，我们会使用 self 暂存 this

```js
var nameObj = {
  name: 'Tom',
  showName: function() {
    console.log(this.name);
  },
  waitShowName: function() {
    var self = this;
    this.showName();
    setTimeout(function() {
      self.showName();
    }, 1000);
  }
};

nameObj.waitShowName();

```

## 原型

每个 JavaScript 函数都有 prototype 属性，这个属性引用了一个对象，这个对象就是原型对象。原型对象初始化的时候是空的，我们可以在里面自定义任何属性和方法，这些方法和属性都将被该构造函数所创建的对象继承。

1. 实例就是通过构造函数创建的。实例一创造出来就具有 constructor 属性（指向构造函数）和 \__proto\__ 属性（指向原型对象），

2. 构造函数中有一个 prototype 属性，这个属性是一个指针，指向它的原型对象。

3. 原型对象内部也有一个指针（constructor 属性）指向构造函数。

4. 实例可以访问原型对象上定义的属性和方法。

## 分析构造函数

```js
function Company(name) {
  this.name = name;
}
Company.prototype.showCompany = function() {
  console.log(this.name);
};

var google = new Company('谷歌');
google.showCompany();
```

## 原型链实例

```js
function Company(name) {
  this.name = name;
}
Company.prototype.showCompany = function() {
  console.log(this.name);
};
function Google(name) {
  this.name = name;
}
Google.prototype = new Company();
Google.prototype.constructor = Google; 
Google.prototype.showCompany = function() {
  console.log('巨头公司' + this.name);
};
var google = new Google('谷歌');
google.showCompany();
var facebook = new Company('脸谱');
facebook.showCompany();
```

## 思考：

1. 修改 Company.prototype.showCompany 方法会出现什么情况
2. 删除 Google.prototype.showCompany 方法会出现什么情况

## 深入理解 JavaScript 的变量作用域

`在学习 JavaScript 的变量作用域之前，我们应当明确几点：`

- JavaScript 的变量作用域是基于作用域链的。

- JavaScript 没有块级作用域。

## 作用域实例分析

```js
var a = '0';
function level0() {
  var a = '1';

  function level1() {
    var a = '2';
    function level2a() {
      console.log(a);
    }
    console.log(a);

    level2a();
  }
  console.log(a);
  level1();
}
level0();
```

## JavaScript 作用域链要点

- JavaScript 的作用域链。

- 函数体内部，局部变量的优先级比同名的全局变量高。

- JavaScript 没有块级作用域。

- 未使用`var`关键字定义的变量都是全局变量。

- 全局变量都是全局对象的属性。


## 闭包

> 闭包（closure）是 JavaScript 语言的一个难点，也是它的特色，很多高级应用都要依靠闭包实现。

- 闭包 是指有权访问另一个函数作用域中的变量的函数

- 创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量

- 一般函数执行完毕后，局部活动对象就被销毁，内存中仅仅保存全局作用域。使用闭包可以把局部变量驻留在内存中，成为封装的局部私有变量。

## 闭包实例

```js
function getStaffNum() {
  var staffNum = 5000;
  return function() {
    staffNum++;
    console.log('Num is ' + staffNum);
  }
}

var staffNum = getStaffNum();

staffNum(); // 输出什么？

staffNum(); // 输出什么？
```
实战篇
======

* tnpm
* package.json

## node模块

Node.js 采用模块化结构，遵照 [CommonJS规范](http://wiki.commonjs.org/wiki/CommonJS)的定义和使用。模块与文件是一一对应的。加载一个模块，实际上就是加载对应的一个模块文件。

require 方法用于指定加载模块。

```js
var a = require('a');
```

上面代码表明，以当前目录下的`a.js`文件为路径，加载名为`a`的模块。由于 require
 方法默认加载后缀为`.js`的文件，因此可以把后缀省略，所以也可以直接如下写法。

```js
var a = require('./a');
```

## 系统模块

Node.js 系统提供了一系列功能模块，与操作系统交互与调用。这些核心的功能模块集成在 node 中，可以直接使用。

- **http**：HTTP 相关功能。
- **path**：处理文件路径。
- **url**：操作 URL。
- **fs**：系统 io 功能。
- **child_process**：进程功能。
- **util**：提供了一些工具。

## 自定义模块

下面是一个最简单的模块，新建一个`a.js`文件如下：

```js
module.exports = function(i) {
  console.log(i);
};
```

上面代码就是一个模块，它通过`module.exports`变量，对外输出一个方法。

使用方法如下:

```js
var m = require('./a');
m('输出');
```

## 全局对象和全局变量

常用几个全局对象

- **console**：这是 Node 内置的 console 模块，提供命令行环境中的输出。
- **module**：该对象指向当前模块，`module.exports`属性是该模块对外的接口，被 require 方法调用。
- **exports**：该对象指向 `module.exports`属性，是该属性的简写形式。exports 也不是全局变量，而是每个模块私有的。

## 全局对象和全局变量

Node 提供一些全局函数。

- **setTimeout()**：提供简单的定时器功能。
- **clearTimeout()**：用于终止一个 setTimeout 方法新建的定时器。
- **setInterval()**：循环定时器。
- **clearInterval()**：终止一个用 setInterval 方法新建的定时器。
- **require()**：用于加载模块。
- **Buffer()**：用于操作二进制数据。

## 异常处理

## try-catch

最常用的捕获异常的方式，就是使用`try...catch`。但是却无法捕获异步运行的代码抛出的异常。

```js
try {
  setTimeout(function() {
    throw new Error('error');
  }, 16);
} catch(err) {
  console.log(err);
}
```

代码抛出的异常无法被 catch 代码块捕获。

怎么办？

## uncaughtException 事件

当一个异常未被捕获，就会触发 `uncaughtException` 事件，可以对这个事件注册回调函数，从而捕获异常。

```js
process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err);
});

try {
  setTimeout(function() {
    throw new Error("error");
  }, 16);
} catch(err) {
  console.log(err);
}

```

## 引用、书籍推荐

- [W3school](http://www.w3school.com.cn/js/pro_js_syntax.asp)
- [EcmaScript](http://lzw.me/pages/ecmascript/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript 高级程序设计](http://book.douban.com/subject/10546125/)
- [JavaScript 语言精髓与编程实践](http://book.douban.com/subject/3012828/)

## THX ...
