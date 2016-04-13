# Android-网络编程

- - -

### android.webkit.WebView

- addJavascriptInterface
- [WebViewJsBridge](https://github.com/xudafeng/WebViewJsBridge)
- onPageFinished
- shouldOverrideUrlLoading

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

### Android Manifest file:

```
<uses-permission android:name="android.permission.INTERNET" />

```

- - -

### Cookie

- - -

## React Native

[autoresponsive_react_native_sample](https://github.com/xudafeng/autoresponsive_react_native_sample)
