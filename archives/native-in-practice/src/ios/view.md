# iOS-视图控制

- 视图也是容器
- 子视图遮盖了父视图内容
- 同级后面的视图遮盖前面视图
- 事件层层透传直到应用对象
- GPU 渲染 Tile-Based 机制

- - -

0. View Management
0. Data Marshalling
0. User Interactions
0. Resource Management
0. Adaptivity

- - -

## OSX(MacOS) vs iOS

- iOS 应用程序只有一个窗口
- iOS 通常不设关闭框，淡化常规窗口操作
- NSWindow 的父类是 NSResponder， UIWindow 的父类是 UIView
- iOS 通常默认是满屏
- iOS 不应创建额外的窗口

- - -

- UIView 包含了一个 CALayer
- CALayer 基于 QuartzCore 库

- - -

## UIView

- UIWindow
- UIScrollView
    - UITextView
    - UITableView
- UILabel
- UIControl
    - UIButton
    - UITextField
- UIImageView
- UIWebView
- UINavigationBar
- ...

- - -

## UIViewController

[The Role of View Controllers](https://developer.apple.com/library/ios/featuredarticles/ViewControllerPGforiPhoneOS/index.html)

- ViewController
- UITableViewController
- UITabBarController
- UINavigationController
- ...

- - -

```objc
- [ViewController initWithNibName:bundle:];
- [ViewController init];
- [ViewController loadView];
- [ViewController viewDidLoad];
- [ViewController viewWillDisappear:];
- [ViewController viewWillAppear:];
- [ViewController viewDidAppear:];
- [ViewController viewDidDisappear:];
```

- - -

## Navigation Stack

- pushViewController
- pushViewController
- popViewController
- popToViewController
- popToRootViewController
- ...

- - -

<img data-src="http://ww4.sinaimg.cn/large/6d308bd9gw1f299zjc2p9j20pp0ocack.jpg" />

- - -

## UIViewController LifeCircle

- - -

## 视图控制原则

- 尽所能使用属性方法改变视图，而非定制新视图
- 滚动会导致数个视图在短时间内更新
- 控制内存用量，例如 UITableViewCell 复用

[iscanner_ios](https://github.com/iscanner/iscanner_ios)

- - -

## HomeWork

- [Holland](https://github.com/xudafeng/Holland)
