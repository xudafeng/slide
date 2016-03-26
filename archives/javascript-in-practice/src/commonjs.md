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
