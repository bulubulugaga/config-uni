import Vue from 'vue'
import App from './App'
import {
	router,
	RouterMount
} from "@/common/router";
import store from "@/common/store";
import http from '@/common/request';

Vue.config.productionTip = false

App.mpType = 'app'

// 引入路由
Vue.use(router);

// 挂载请求
Vue.prototype.$http = http;

const app = new Vue({
    ...App,
	store
})
app.$mount()
