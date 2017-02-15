# Vue 2.0 template

> vue 2.0 项目模板
>
> 包含vuex、vue-router等依赖。
>
> 包含完整node_modules文件夹。

## 目录结构介绍

- ┏ build/ `webpack配置`
- ┣ config/ `webpack配置`
- ┣ dist/ `编译生成目录`
- ┣ src/ `开发源文件`
- ┃ ┣ assets/ `需要被编译的静态资源（css、image、js……）`
- ┃ ┣ components/ `组件`
- ┃ ┣ filters/ `自定义过滤器`
- ┃ ┣ router/ `路由配置`
- ┃ ┣ store/ `vuex状态管理`
- ┃ ┃ ┣ modules/ `状态模块`
- ┃ ┃ ┃ ┣ base.js `基础状态模块的state、mutation`
- ┃ ┃ ┣ mutation-types.js `mutation方法名`
- ┃ ┃ ┣ actions.js `vuex状态异步操作，提交mutation`
- ┃ ┃ ┣ api.js `ajax调用接口`
- ┃ ┃ ┣ getter.js `vuex计算属性`
- ┃ ┃ ┗ index.js `组合state、mutation`
- ┃ ┣ utils/ `通用工具库`
- ┃ ┣ views/ `页面组件`
- ┃ ┣ App.vue `入口组件`
- ┃ ┗ main.js `入口`
- ┣ static/ `不需要编译的静态资源文件`
- ┣ node_modules/ `npm引入的依赖包`
- ┣ index.html `SPA容器`
- ┣ package.json `npm配置信息`
- ┗ README.md `说明文档`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> [more info](https://mrleo.gitbooks.io/books/content/)
