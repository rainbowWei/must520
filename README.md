# must520

> must official website for xingxiwang.com

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:10086
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# 部署服务器
$ npm run restart
# 如遇见更换服务器，需先执行一下代码；下面代码是第一次部署时才执行的
$ npm run pm
```

## 注意事项
+ css和js的图片根路径不同（js和template中已做处理，统一使用Vue.prototype.$imgUrl，css中使用，需要在@/assets/css/variables.scss中根据环境而改变）


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
