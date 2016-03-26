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
