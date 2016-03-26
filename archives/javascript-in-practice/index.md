Javascript in practice
======================

Ajax
====

Asynchronous Javascript And XML

origin
======

```javascript
var api = 'https://api.github.com/users/xudafeng';

var xmlHttp = new XMLHttpRequest();

xmlHttp.open('GET', api, true);

xmlHttp.onreadystatechange = function(d) {
  if (xmlHttp.readyState == 4) {
    console.log(xmlHttp.responseText);
  }
};

xmlHttp.send(null);
```

log
===

![](http://ww3.sinaimg.cn/mw1024/6d308bd9gw1eu3a5c099tj20ku0jmdil.jpg)

jQuery
======

```javascript
var api = 'https://api.github.com/users/xudafeng';

$.ajax({
  method: 'GET',
  url: api,
  data: {
    foo: 'bar'
  }
}).done(function(msg) {
  console.log(msg);
});
```

JSON
====

JavaScript Object Notation

### JSONP

JSON with Padding

- script tag
- javascript callback

Reference
=========

0. [JSON](http://www.json.org/)
0. [jQuery.ajax](http://api.jquery.com/jQuery.ajax/)
0. [MDN, Using_XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)


commonjs
========

namespace
=========

```javascript
var bar = function() {
  console.log('bar');
};

bar();

var obj = {
  foo: function() {
    console.log('foo');
  }
};

obj.foo();
```

closure
=======

start with closure

```javascript
(function() {
  console.log(this)
})()
```

module.exports
==============

```javascript
module.exports = function() {
  console.log('foo');
}
```

exports
=======

```javascript
exports.foo = function() {
  console.log('bar');
}

```

AMD
===

```javascript
define(function(require, exports, module) {
  var foo = require('foo');
  var bar = require('bar');

  console.log(foo);
});
```

webpack
=======


Reference
=========

0. [commonjs](http://www.commonjs.org/)
0. [webpack](http://webpack.github.io/)

event
=====

publish/subscribe

```javascript
var EventEmitter = require('events').EventEmitter;

var foo = new EventEmitter();

foo.on('bar', function(d) {
  console.log(d)
});

foo.emit('bar', {
  data: 'data'
});

```

Reference
=========

0. [nodejs, events](http://xudafeng.github.io/nodejs/events.html)

style
=====

2 Spaces for indention
======================

```javascript

function() {

  // right
  var foo = 'bar';

  // wrong
    var foo = 'bar';
}

```

Use Semicolons
==============

```javascript
// right
var foo = 'bar';

// wrong
var foo = 'bar'
```

80 characters per line
======================

Use single quotes
=================

```javascript
// right
var foo = 'bar';

// wrong

var foo = "bar";
```

Opening braces go on the same line
==================================

```javascript
// right

if (true) {
  console.log('winning');
}

// wrong

if (true)
{
  console.log('losing');
}

```

Declare one variable per var statement
======================================

```javascript
// right

var keys = ['foo', 'bar'];
var values = [23, 42];

// wrong

var keys = ['foo', 'bar'],
values = [23, 42];

```

Use the `===` operator
======================

```javascript

// right

if (foo !== 1) {
  console.log('bar');
}

//wrong

if (foo != 1) {
  console.log('bar');
}

```

Reference
=========

0. [node-style-guide](https://github.com/felixge/node-style-guide)
0. [Airbnb, javascript](https://github.com/airbnb/javascript)
