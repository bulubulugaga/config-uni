// 路由
import {
	RouterMount,
	createRouter
} from './uni-simple-router.js'
import store from '@/common/store'
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	applet: {
		animationDuration: 300 // 页面切换时间 默认 300ms 
	},
	routerErrorEach: ({
		type,
		msg
	}) => {
		if(type === 3){       
			router.$lockStatus=false;
		}
	},
	// 通配符，非定义页面，跳转404
	routes: [
		...ROUTES,
		{
			path: '*',
			redirect: (to) => {
				return {
					name: '404'
				}
			}
		},
	]
});

//  路由白名单
const WHITE_LIST = ['login', '404', 'home'];

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	// 访问免登陆白名单，直接进入
	if (WHITE_LIST.indexOf(to.name) !== -1) {
		next();
		return;
	}
	if(!store.getters.isLogin) {
		next({ name: 'login' });
	} else {
		next()
	}
});

export {
	router,
	RouterMount
}
