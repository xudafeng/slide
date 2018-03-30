# Android-网络编程

- - -

## 线程

UI主线程和工作线程

- - -

## Socket

```java
new Socket(ip, port);

Socket.getOutputStream();

Socket.getInputStream();

```

- - -

## Make HTTP

- HttpURLConnection
- DefaultHttpClient
- WebView

- - -

## android.webkit.WebView

- addJavascriptInterface
- [WebViewJsBridge](https://github.com/app-bootstrap/WebViewJsBridge)
- onPageFinished
- shouldOverrideUrlLoading

- - -

## [feedit_android sample](https://github.com/feedit/feedit_android)

- - -

## 线程使用原则

- 网络操作使用非UI线程（工作线程），主线程会阻塞，导致无响应
- 工作线程不允许操作UI元素
- 操作UI元素的API都是线程不安全的，只能在一个线程中调用以保证线程安全

- - -

```java
class JsObject {
    @JavascriptInterface
    public String toString() { return "injectedObject"; }
}
webView.addJavascriptInterface(new JsObject(), "injectedObject");
webView.loadData("", "text/html", null);
webView.loadUrl("javascript:alert(injectedObject.toString())");
```

- - -

## Android Manifest file:

```
<uses-permission android:name="android.permission.INTERNET" />

```

- - -

## Android Cookie

- - -

## Android Session

- - -

## React Native

[autoresponsive_react_native_sample](https://github.com/xudafeng/autoresponsive_react_native_sample)
