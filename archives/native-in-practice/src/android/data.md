# Android-数据存储

- - -

## Sqlite

单进程

- - -

## SharedPrefrences

- 基于`XML`文件存储`key-value`键值对数据
- 存储位置在`/data/data/${PACKAGE_NAME}/shared_prefs`

- - -

## 文件存储

- openFileOutput()
- `/data/data/${PACKAGE_NAME}/files/*.*`

- - -

## SDCard

```java
if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)) {
  File sdCardDir = Environment.getExternalStorageDirectory();
  File saveFile = new File(sdCardDir, "test.file");
  FileOutputStream outStream = new FileOutputStream(saveFile);
  outStream.write("test".getBytes());
  outStream.close();
}
```

- - -

## 权限

```xml
<uses-permission android:name="android.permission.MOUNT_UNMOUNT_FILESYSTEMS"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
```
