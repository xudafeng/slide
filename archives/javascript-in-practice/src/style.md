style
=====

### 2 Spaces for indention

```javascript

function() {

  // right
  var foo = 'bar';

  // wrong
    var foo = 'bar';
}

```

### Use Semicolons

```javascript
// right
var foo = 'bar';

// wrong
var foo = 'bar'
```

### 80 characters per line

### Use single quotes

```javascript
// right
var foo = 'bar';

// wrong

var foo = "bar";
```

### Opening braces go on the same line

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

### Declare one variable per var statement

```javascript
// right

var keys = ['foo', 'bar'];
var values = [23, 42];

// wrong

var keys = ['foo', 'bar'],
values = [23, 42];

```

### Use the `===` operator

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

### Reference

0. [node-style-guide](https://github.com/felixge/node-style-guide)
0. [Airbnb, javascript](https://github.com/airbnb/javascript)
