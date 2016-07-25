# Android-应用布局

布局可相互嵌套

- - -

<img data-src="http://ww2.sinaimg.cn/large/6d308bd9gw1f4nmiojewxj20d6071gls.jpg" />

- - -

## FrameLayout（框架布局）

```java
基于左上角、重叠
android:layout_margin
android:layout_gravity
```

- - -

## LinearLayout（线性布局）

```java
android:orientation="horizontal|vertical"
```

- - -

## AbsoluteLayout（绝对布局）

绝对定位

- - -

## RelativeLayout（相对布局）

```java
相对于某一个元素
android:layout_below
android:layout_toLeftOf

相对于父元素的地方
android:layout_alignParentLeft
android:layout_alignParentRigh
```

- - -

## TableLayout（表格布局）

若干TableRow

- - -

## GridLayout（网格布局）

- - -

## Sample

[iscanner_android](https://github.com/iscanner/iscanner_android)

- - -

## Supporting Different Devices

- Different Languages
- Different Screens
- Different Platform Versions

- - -

<img data-src="http://ww1.sinaimg.cn/large/6d308bd9gw1f51i7eg5uaj20rs0akta0.jpg"/>

- - -

<img data-src="http://ww3.sinaimg.cn/large/6d308bd9gw1f51i7e0mkaj20k306j3yy.jpg" />

- - -

| index	| px	     | size	   | name	           | dpi    |
| ----- | -------- | ------- | --------------- | ------ |
| xxh	  | 1280×960 | 3.5英寸 | drawable-xxhdpi | 480dpi |
| xh    | 960×640	 | 3.5英寸 | drawable-xhdpi  | 320dpi |
| h	    | 640×480	 | 3.5英寸 | drawable-hdpi   | 240dpi |
| m	    | 480×320	 | 3.5英寸 | drawable-mdpi   | 160dpi |
| l	    | 320×240	 | 3.5英寸 | drawable-ldpi   | 120dpi |
