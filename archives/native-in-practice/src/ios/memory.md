# iOS-内存管理

- - -

## Automatic Reference Counting

ARC并不是GC，只是一种代码静态分析工具

- - -

## GCD

Grand Central Dispatch

- 可以让程序长时间压后台

- - -

```objc
//  后台执行：
dispatch_async(dispatch_get_global_queue(0, 0), ^{
  // something
});

// 主线程执行：
dispatch_async(dispatch_get_main_queue(), ^{
  // something
});

// 一次性执行：
static dispatch_once_t onceToken;
dispatch_once(&onceToken, ^{
  // code to be executed once
});

// 延迟2秒执行：
double delayInSeconds = 2.0;
dispatch_time_t popTime = dispatch_time(DISPATCH_TIME_NOW, delayInSeconds * NSEC_PER_SEC);
dispatch_after(popTime, dispatch_get_main_queue(), ^(void){
   // code to be executed on the main queue after delay
});

// 自定义dispatch_queue_t
dispatch_queue_t urls_queue = dispatch_queue_create("blog.devtang.com", NULL);
dispatch_async(urls_queue, ^{
  // your code
});
dispatch_release(urls_queue);

// 合并汇总结果
dispatch_group_t group = dispatch_group_create();
dispatch_group_async(group, dispatch_get_global_queue(0,0), ^{
  // 并行执行的线程一
});
dispatch_group_async(group, dispatch_get_global_queue(0,0), ^{
  // 并行执行的线程二
});
dispatch_group_notify(group, dispatch_get_global_queue(0,0), ^{
  // 汇总结果
});
```

- - -

## GC

Garbage collection

Apple的移动终端中，是不支持GC的，Mac桌面系统开发中是支持的，移动终端主要靠ARC

- - -

## 自动引用计数 ARC

自动引用计数不再需要调用retain、release、autorelease

- - -

- alloc, retain, copy
- release, autorelease
- 循环引用，内存泄露
- 错误释放内存，引起crash


- - -

## 循环引用

- 在合理的位置主动断开一个引用，对象回收
- 使用弱引用的方法

- - -

## 分清strong，weak


```
strong修饰的指针变量指向对象时，当指针指向新值或者指针不复存在，相关联的对象就会自动释放
weak修饰的指针变量指向对象，当对象的拥有者指向新值或者不存在时weak修饰的指针会自动置为nil
```

- - -

## block

```objc
//脱字符（^）是块的语法标记
void (^printBlock)(NSString *x);
printBlock = ^(NSString* str) {
  NSLog(@"print:%@", str);
};
printBlock(@"hello world!");
```

- - -

## 优化点

UI要在主线程刷新

- - -

- 静态方法(类方法)创建一个对象时,对象已被放入自动释放池
- NSArray 和 NSMutableArray，后者可以添加，动态申请新的内存空间
- import不会引起交叉编译,确保头文件只会被导入一次
- 不要使用太复杂的XIB/Storyboard，避免一次载入消耗过多
- UITableViewCells、UICollectionViewCells、UITableViewHeaderFooterViews设置正确的reuseIdentifier
