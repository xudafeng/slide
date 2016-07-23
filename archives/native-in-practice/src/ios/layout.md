# iOS-应用布局

- 动态创建: 自由灵活，代码管理方便(适用于大型项目)
- `Xibs`, `Storyborad` 更易适应更多屏幕

- - -

## iOS布局-动态创建

- 任何视图控件都是继承自 UIView
- 控制视图布局的属性`frame`, `center`, `bounds`
- `frame`：在父view坐标系统中的位置和大小，参照点是父亲的坐标系统
- `center`：控制位置中心点
- `bounds`：在本身坐标系统中的位置和大小，参照点是本身坐标系统
- Auto Layout `NSLayoutConstraint` 界面布局

- - -

```objc
- (CGRect) frame {
  return CGRectMake(self.frame.origin.x, self.frame.origin.y, self.frame.size.width, self.frame.size.height);
}
- (CGRect) bounds {
  return CGRectMake(0, 0, self.frame.size.width, self.frame.size.height);
}
```

- - -

## iOS布局-Xibs

- `xib` 的本质就是 `xml`
- 一个 `xib` 文件对应一个 `ViewController`
- `自定义view` 可以使用单个 `xib` 并从 `main bundle` 进行动态加载的方式来载入
- 可以在代码中被动态覆盖
- 必要地，较少地使用 `IBOutlet` 与 `IBAction`

- - -

## iOS布局-storyboard

- 一组 `ViewController` 对应的 `xib` 集合
- 拖拽产生的控件都是绝对定位的

- - -

## iOS布局-AutoLayout

- NSLayoutConstraint
- [Masonry](https://github.com/SnapKit/Masonry)
- [autoresponsive](https://xudafeng.github.io/autoresponsive-react)
