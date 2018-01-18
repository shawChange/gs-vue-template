# gstemplate

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# 如果报python找不到的错误，请安装python并执行
set PYTHON=D:\Python\bin\Python.exe //路径根据自己的安装路径修改


# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 项目说明
1. 所有文件和文件夹都遵循驼峰式命名法，并且首字母小写
2. moudles下面以文件夹形式存在
3 components下面文件和文件加共存，且只允许放公用组件
4 assets下面是图片等静态资源，直接拷贝并不会打包成base64
5 libs下面放置比较大的第三方库
6 样式必须都写在scss里面
7 models 下面放置的是类，也就是一群对象的抽象模板
8 模板只提供单元测试，没有提供端对端测试

