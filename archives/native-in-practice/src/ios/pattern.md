# iOS-设计模式

[MVC](https://developer.apple.com/library/ios/documentation/General/Conceptual/DevPedia-CocoaCore/MVC.html), MVP, [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)

- - -

## Observer

- - -

### NSNotificationCenter

```swift
let notificationCenter = NSNotificationCenter.defaultCenter()
let operationQueue = NSOperationQueue.mainQueue()
let applicationDidEnterBackgroundObserver = notificationCenter.addObserverForName(UIApplicationDidEnterBackgroundNotification, object: nil, queue: operationQueue, usingBlock: {
(notification: NSNotification!) in self.logger.info("run in background")
})
//notificationCenter.removeObserver(applicationDidEnterBackgroundObserver)
```

- - -

## MVC

- - -

### MVC

<img data-src="http://ww1.sinaimg.cn/large/6d308bd9gw1f2exfi380qj21080ezta0.jpg" />

- - -

### Strong Coupling

<img data-src="http://ww1.sinaimg.cn/large/6d308bd9gw1f2exhz1nggj20vy0a8t9u.jpg" />

- - -

## MV(*)

- - -

## MVP

Presenter（Supervising Controller）

<img data-src="http://ww4.sinaimg.cn/large/6d308bd9gw1f2exst25woj20o809agmg.jpg" />

- - -

## MVVM

ViewController ≈ View

View and Model has on Coupling

- - -

## MVVM

<img data-src="http://ww1.sinaimg.cn/large/6d308bd9gw1f2exv8kiygj212u0bsq4m.jpg" />

- - -

## Data Binding

Key-Value Observing

[Bond-swift](https://github.com/SwiftBond/Bond)

- - -

### Functional Programming

[RxSwift](https://github.com/ReactiveX/RxSwift)

[ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa)

- - -

<img data-src="http://ww4.sinaimg.cn/large/6d308bd9gw1f2eyala5tyj218e0jm0ve.jpg" />

- - -

<img data-src="http://ww2.sinaimg.cn/large/6d308bd9gw1f2eze2qtoij20l00b7mys.jpg" />

- - -

<img data-src="http://ww4.sinaimg.cn/large/6d308bd9gw1f2eyk4j2fsj21300c4t9z.jpg" />

- - -

## VIPER

objc.io/issues#13

- [Generamba](https://github.com/rambler-ios/Generamba)
- [viper-to-be-or-not-to-be](https://swifting.io/blog/2016/03/07/8-viper-to-be-or-not-to-be/)

- - -

[issue-13-viper](https://github.com/objcio/issue-13-viper)

<img data-src="http://ww2.sinaimg.cn/large/6d308bd9gw1f2eyk4sphej20hs0vkwgj.jpg" />

- - -

Thx 2 [ios-architecture-patterns](https://medium.com/ios-os-x-development/ios-architecture-patterns-ecba4c38de52)
