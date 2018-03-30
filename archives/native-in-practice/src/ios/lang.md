# iOS-编程语言

- [C++, Objective-C, Java, C#](http://hyperpolyglot.org/cpp)
- Swift1.x [C, Go, Swift](http://hyperpolyglot.org/c)
- Swift2.x [Rust, Swift, Scala](http://hyperpolyglot.org/rust)

- - -

## Object-C

- - -

- cc: C Compiler
- gcc: GNU Compiler Collection
- Do you remeber [C](https://github.com/xudafeng/c_sample)?
- C in Xcode

- - -

### Variable

```objc
// @符号与双引号
NSLog(@"Hello world!");
// NSInteger vs NSNumber vs int
NSInteger a = 1;
NSLog(@"%d", a);
//char * cstring = "a c string!";
NSString cstring = "a objc string!";
```

- - -

```objc
// NSArray need constructor class
NSMutableArray *array = [[NSMutableArray alloc] init];
[array addObject:[NSNumber numberWithInt:?]];

+(NSNumber *) numberWithChar: (char) value;
+(NSNumber *) numberWithInt: (int) value;
+(NSNumber *) numberWithFloat: (float) value;
+(NSNumber *) numberWithBool: (BOOL) value;

```

- - -

### Trans with NSString & NSInteger

```objc
NSInteger integerNumber = 1;
NSString *string = [NSString stringWithFormat:@"%d", integerNumber];
NSLog(@"string is %@", string);
```

```objc
integer = [string intValue];
NSLog(@"integer is %d", integerNumber);
```

- - -

### Message Like Smalltalk

```objc
// error on runtime not complie time
[obj method];
// args
CGRectMake(0, 0, 0, 0);
// Message nested
```

- - -

### Private Method?

- Objective-C里没有私有方法

- - -

### Interface & Implementation

```objc
// Interface
@interface CustomClass {
    NSInteger merber_var_1;
    NSInteger member_var_2;
}
-(NSInteger) instance_method_1;
@end

// Implementation
@implementation CustomClass {
    NSInteger merber_var_1;
}
-(NSInteger) instance_method_1 {
}
@end
```

- - -

### Class & Message

```objc
@interface CustomClass
+(void) method1;
-(void) method2;
@end
@implementation CustomClass
+(void) method1 {
NSLog(@"method1");
}
+(void) method2 {
NSLog(@"method2");
}
@end
// static method
[CustomClass method1];
cls = [CustomClass new];
[cls method2];

```

- - -

### Async

```objc
// NSTimer
NSTimer timer = [NSTimer scheduledTimerWithTimeInterval:2.0 target:self selector:@selector(some) userInfo:nil repeats:NO];
```

- - -

### Inherit

```objc
// https://github.com/app-bootstrap/JsWebView
// JsWebViewController.h
@interface JsWebViewController: UIViewController
@property (strong, nonatomic) NSString *url;
@end
// JsWebViewController.m
@implementation JsWebViewController
...
@end
```

- - -

### Protocol

```swift
#import "ViewController.h"
@protocol AProtocol <NSObject>
@required // required is default
-(void) method1;
@optional
-(void) method2;
@end
@interface ViewController () <AProtocol>
@end
@implementation ViewController
- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}
- (void)method1 {
}
@end

```

- - -

### Delegate

```swift
@protocol AProtocol <NSObject>
@required // required is default
-(void) method1;
@optional
-(void) method2;
@end
@interface CustomClass : NSObject {
    id<AProtocol> delegate;
}
@property (retain) id<AProtocol> delegate;
-(void) method3;
@end
@implementation CustomClass;
@synthesize delegate;
    -(void) method3 {
        [delegate method1];
        [delegate method2];
    }
@end
```

- - -

## Swift

- - -

### Playground

- [playground_sample](https://github.com/xudafeng/playground_sample)

- - -

### Variable & Constant

```swift
let a = 1, b = "string";
var c = true; // 不再是 YES, NO
var index:Int = 0;
var str:String = "it a string";
```

- - -

### Tuples

- Objective-C 里没有，或许你玩过 Python？

```swift
var t1 = (404, "Not Found");
t1.1
var t2 = (code: 451, description: "Unavailable for fog reasons", version: "HTTP/1.1");
t2.description
```

- - -

### Optionals

```swift
var optValue:Int? = 10; // nil allow
let res = optValue! + 1; // !本质为解包
func getProps() -> String? {
  ...
}
if let temp = getProps() {
  ...
}
```

- - -

### Flow Control

- for-in, switch

- - -

### Function

```swift
func sayHello(name: String, anotherName: String) -> String {
    return "Hello, \(name) and \(anotherName)";
}

```

- - -

### Enum

```swift
enum WeatherType {
    case Sun;
    case Cloud;
    case Rain;
    case Snow;
    case Smog(aqi: Int);

    func chinese_name() -> String {
        switch self {
        case .Sun:
            return "晴";
        case .Cloud:
            return "云";
        case .Rain:
            return "雨";
        case .Snow:
            return "雪";
        case .Smog(let aqi):
            return "霾(空气质量指数:\(aqi))";
        }
    }
}
```

- - -

### Struct

```swift
struct Person {
    var clothes: String;
    var shoes: String;

    func wear() {
        print("Clothes: \(clothes), Shoes: \(shoes)");
    }
}
```

- - -

### Class

```swift
class Singer {
    var name: String;
    var age: Int;

    init(name: String, age: Int) {
        self.name = name;
        self.age = age;
    }

    func sing() {
        print("la la la");
    }
}
```

- - -

### Inherit

```swift
// https://github.com/app-bootstrap/swifty-webview
class CustomWebview: UIWebView {
  func loadURL(urlString: String) {
    let url: NSURL = NSURL(string: urlString)!;
    print(url);
    let request = NSURLRequest(URL: url);
    super.loadRequest(request);
  }
}
var webview = CustomWebview();
webview.loadURL("https://xudafeng.github.io");
```

- - -

### Protocol & Delegate & extension

```swift
protocol Song {
    var lyric: String { get }
    func play();
}

protocol SongDelegate {
    func sing(lyric: String) -> String;
}

class Folk: Song {
    var lyric: String;
    var delegate: SongDelegate?;
    init(lyric: String) {
        self.lyric = lyric;
    }
    func play() {
        self.delegate?.sing(lyric);
    }
}

extension Singer: SongDelegate {
    func sing(lyric: String) -> String {
        return lyric
    }
}
```

- - -

# Swift 3.0

## ... orz

- - -

### Bridging

- Objective-C Bridging

- - -

### Swift 和 C 的交互

- C 中有指针，Swift 中没有
