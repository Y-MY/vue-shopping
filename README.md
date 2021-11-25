# vue-shopping

> 本项目纯属学习。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8082
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 启动项目
1. npm i
2. npm run dev

## 使用脚手架搭建项目
1. 安装脚手架vue cli，输入```npm install vue-cli -g ```，
输入vue -V查看是否下载成功，出现版本号则说明安装成功。
2. 初始化项目：```vue init webpack vue-shopping```
3. 引入组件：
```

npm install element-ui --save-dev

npm install vue-resource --save

npm install vue-router --save
```
4. 修改端口号：

进入```config/index.js```文件，将 ```port```改成8082

5.使用```npm run build```打包的html，没有引号

进入```build/webpack.prod.cong.js```,将```removeAttributeQuotes```这个值修改成false


## 安装less踩坑
该项目基本上使用less编写样式

1.安装less和less-loader
```
npm install less@3.9.0 --save-dev
npm install less-loader@5.0.0 --save-dev
```
2.最后在页面代码中引用：
```
<style lang="less" scoped>
</style>
```

