# iOS-视图控制

- 视图也是容器
- 子视图遮盖了父视图内容
- 同级后面的视图遮盖前面视图
- 事件层层透传直到应用对象
- GPU渲染的Tile-Based机制

- - -

0. View Management
0. Data Marshalling
0. User Interactions
0. Resource Management
0. Adaptivity

- - -

## OS X VS iOS

- iOS应用程序只有一个窗口
- iOS通常不设关闭框，淡化常规窗口操作
- NSWindow的父类是NSResponder， UIWindow的父类是UIView
- iOS通常默认是满屏
- iOS不应创建额外的窗口

- - -

- UIView包含了一个CALayer
- CALayer属于QuartzCore库

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

![](http://ww4.sinaimg.cn/large/6d308bd9gw1f299zjc2p9j20pp0ocack.jpg)

- - -

## UIViewController LifeCircle

- - -

## 视图控制原则

- 尽所能使用属性方法改变视图，而非定制新视图
- 滚动会导致数个视图在短时间内更新

- - -

## HomeWork

- [Holland](https://github.com/xudafeng/Holland)
