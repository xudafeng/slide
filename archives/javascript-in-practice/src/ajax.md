Ajax
====

Asynchronous Javascript And XML

### origin

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
