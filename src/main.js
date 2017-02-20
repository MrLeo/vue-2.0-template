/*                     _ooOoo_
 *                    o8888888o
 *                    88" . "88
 *                    (| -_- |)
 *                    O\  =  /O
 *                 ____/`---'\____
 *               .'  \\|     |//  `.
 *              /  \\|||  :  |||//  \
 *             /  _||||| -:- |||||-  \
 *             |   | \\\  -  /// |   |
 *             | \_|  ''\---/''  |   |
 *             \  .-\__  `-`  ___/-. /
 *           ___`. .'  /--.--\  `. . __
 *        ."" '<  `.___\_<|>_/___.'  >'"".
 *       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *       \  \ `-.   \_ __\ /__ _/   .-` /  /
 *  ======`-.____`-.___\_____/___.-`____.-'======
 *                     `=---='
 *  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *              佛祖保佑       永无BUG
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'

// ajax插件（fetch）
// https://github.com/github/fetch
//import 'whatwg-fetch'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.config.devtools = true//TODO：开发阶段使用

window.router = router

//将服务端渲染时候的状态写入vuex
//if(window.__INITIAL_STATE__){
//    store.replaceState(window.__INITIAL_STATE__)
//}

//region webpack配置信息
console.log("[Leo] => ",__HOSTS__)
//endregion

const app = new Vue({
    router,
    store,
    ...App // Object spread copying everything from App.vue : render: h => h(App)
}).$mount('#app')//挂载到DOM元素

export {app, store, router}

/* eslint-disable no-new */
//new Vue({
//    el: '#app',
//    template: '<App/>',
//    components: {App}
//})
