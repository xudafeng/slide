# Node.js Primer

- - -

- [Modules](#inner)
- [Async](#inner)
- [Addons](#inner)
- [Trace](#inner)
- [Process](#inner)
- [Stream](#inner)
- [Testing](#inner)

- - -

# Modules

- [wiki](http://wiki.commonjs.org/wiki/Modules/1.1.1)

- - -

```javascript
Module._initPaths = function() {
  const isWindows = process.platform === 'win32';

  var homeDir;
  if (isWindows) {
    homeDir = process.env.USERPROFILE;
  } else {
    homeDir = process.env.HOME;
  }

  // $PREFIX/lib/node, where $PREFIX is the root of the Node.js installation.
  var prefixDir;
  // process.execPath is $PREFIX/bin/node except on Windows where it is
  // $PREFIX\node.exe.
  if (isWindows) {
    prefixDir = path.resolve(process.execPath, '..');
  } else {
    prefixDir = path.resolve(process.execPath, '..', '..');
  }
  var paths = [path.resolve(prefixDir, 'lib', 'node')];

  if (homeDir) {
    paths.unshift(path.resolve(homeDir, '.node_libraries'));
    paths.unshift(path.resolve(homeDir, '.node_modules'));
  }

  var nodePath = process.env.NODE_PATH;
  if (nodePath) {
    paths = nodePath.split(path.delimiter).filter(function(path) {
      return !!path;
    }).concat(paths);
  }

  modulePaths = paths;

  // clone as a shallow copy, for introspection.
  Module.globalPaths = modulePaths.slice(0);
};
```

- - -

```javascript
console.log(module.paths);
```

- - -

### Workshop #1

0. print the relative path of [macaca-cli](//github.com/macacajs/macaca-cli)
0. how to clear module cache

- - -

```javascript
const d = require.resolve('macaca-cli');
delete require.cache(d);
```

- - -

# Async

- - -

## Async I/O

- - -

- select, poll, epoll
- Network [File I/O](http://docs.libuv.org/en/v1.x/design.html#file-i-o)

- - -

![](http://docs.libuv.org/en/v1.x/_images/loop_iteration.png)

- - -

### Support multi asynchronous operations?

Callback, promises, generators and async functions.

- - -

### Workshop #2

0. save to `test.js`
0. complete sample
0. run it with Node.js

- - -

```javascript
const assert = require('assert');

const asyncMethod = function() {
  throw 'fix me!';
};

const number = 1;
const error = new Error('error');

asyncMethod(number, (err, data) => {
  assert(number, data);
});

asyncMethod(error, (err, data) => {
  assert(error.message, err.message);
});

asyncMethod(number)
  .then(data => {
    assert(number, data);
  });

asyncMethod(error)
  .catch(err => {
    assert(error.message, err.message);
  });

const genWrapper = gen => {
  return new Promise(resolve => {
    const g = gen();
    const handle = d => {
      const r = g.next(d);
      if (r.done) {
        resolve();
      } else {
        r.value
          .then(d => {
            handle(d);
          })
          .catch(d => {
            r = g.throw(d);
          });
      }
    };
    handle();
  });
};

genWrapper(function * () {
  let data = yield asyncMethod(number);
  assert(number, data);
  try {
    let data = yield asyncMethod(error);
  } catch (err) {
    assert(error.message, err.message);
  }
});

async function asyncWrapper() {
  let data = await asyncMethod(number);
  assert(number, data);

  try {
    let data = await asyncMethod(error);
  } catch (err) {
    assert(error.message, err.message);
  }
};

asyncWrapper();
```
<!--
const asyncMethod = function() {
  const args = Array.prototype.slice.call(arguments);
  const arg_0 = args[0];
  const cb = args[1];
  const promise = new Promise((resolve, reject) => {
    if (typeof arg_0 === 'number') {
      resolve(arg_0);
    } else {
      reject(arg_0);
    }
  });

  if (typeof cb === 'function') {
    return promise
      .then(data => {
        cb.call(this, null, arg_0);
      })
      .catch(err => {
        cb.call(this, err);
      });
  }
  return promise;
};
-->

- - -

# Addons

- - -

- [nodecv](//github.com/macacajs/nodecv)
- [nodecv-server](//github.com/macacajs/nodecv-server)
- [docs](//xudafeng.github.io/nodejs/addons.html)

- - -

# Trace

- [logger.error](//github.com/xudafeng/xlogger/blob/master/lib/xlogger.js)
- console.trace
- Error.captureStackTrace

<!--
const obj = {};
Error.captureStackTrace(obj);
console.log('error stack', obj.stack);
-->

- - -

# Process

- [exitcodes](http://www.tldp.org/LDP/abs/html/exitcodes.html)
- [signal](http://man7.org/linux/man-pages/man7/signal.7.html)
- child unref

- - -

# Stream

- - -

```javascript
const Jetty = require('jetty');

const jetty = new Jetty(process.stdout);

jetty.clear();

let i = 0;
setInterval(() => {
  i += 0.025;

  const x = Math.round(Math.cos(i) * 25 + 40);
  const y = Math.round(Math.sin(i) * 13 + 20);

  jetty
    .moveTo([y, x])
    .text('🌹');
}, 10);

```

- - -

### [Writable Stream](//github.com/xudafeng/bash/blob/master/scripts/color.js)

```javascript
const stream = require('stream');

let color = 'red';

if (process.argv.length > 2) {
  color = process.argv[process.argv.length - 1];
}

const colorWrapper = (string, color) => {
  switch (color) {
    case 'red':
      return `\u001b[31m${string}\u001b[0m`;
    case 'yellow':
      return `\u001b[33m${string}\u001b[0m`;
    case 'green':
      return `\u001b[32m${string}\u001b[0m`;
    case 'purple':
      return `\u001b[34m${string}\u001b[0m`;
    case 'pink':
      return `\u001b[35m${string}\u001b[0m`;
    case 'cyan':
      return `\u001b[36m${string}\u001b[0m`;
    case 'blue':
      return `\u001b[37m${string}\u001b[0m`;
    default:
      return `\u001b[37m${string}\u001b[0m`;
  }
};

function ColorStream(options) {
  stream.Writable.call(this, options);
}

ColorStream.prototype = Object.create(stream.Writable.prototype, {
  constructor: {
    value: ColorStream
  }
});

ColorStream.prototype._write = function(chunk, encoding, callback) {
  process.stdout.write(colorWrapper(chunk.toString().trim(), color));
  callback();
};

process.stdin.pipe(new ColorStream());
```

- - -

### Workshop #3

reverse string in bash echo

```bash
$ echo 1234567 | node ./sort.js
$ 7654321
```

- - -

# Testing

- [Function Unit Sample](//github.com/node-modules/detect-port)
- [E2E Unit Sample](//github.com/macacajs/awesome-macaca#examples)

- - -

# Trace

- [logger.error](//github.com/xudafeng/xlogger/blob/master/lib/xlogger.js)
- console.trace
- Error.captureStackTrace

<!--
const obj = {};

Error.captureStackTrace(obj);

console.log('error stack', obj.stack);
-->

- - -

# Process

- [exitcodes](http://www.tldp.org/LDP/abs/html/exitcodes.html)
- [signal](http://man7.org/linux/man-pages/man7/signal.7.html)
- child unref

- - -

# Async I/O

- - -

- select, poll, epoll
- Network [File I/O](http://docs.libuv.org/en/v1.x/design.html#file-i-o)

- - -

![](http://docs.libuv.org/en/v1.x/_images/loop_iteration.png)

- - -

[![](https://img3.doubanio.com/lpic/s29227321.jpg)](https://book.douban.com/subject/26937390/)

# The Ad Time

- - -

<!--
node tls https服务
-->

# END
