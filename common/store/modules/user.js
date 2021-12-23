// 用户数据模块
import http from '@/common/request/index'

const state = {
	token: uni.getStorageSync("token") || "",
	isLogin: uni.getStorageSync("isLogin") || false, // 是否登陆
	userInfo: uni.getStorageSync("userInfo") || {}, // 用户信息
}

const getters = {
	token: state => state.token,
	isLogin: state => state.isLogin,
	userInfo: state => state.userInfo,
}

const actions = {
	// 获取用户信息
	getUserInfo({
		commit,
		// dispatch,
		// getters
	}, token = '') {
		return new Promise((resolve, reject) => {
			token && uni.setStorageSync('token', token);
			http('user.info').then(res => {
				if (res.code === 1) {
					commit('userInfo', res.data);
					commit('isLogin', true);
					resolve(res.data)
				}

			}).then(() => {
				// 只有在登录的时候请求购物车信息，订单信息，获取登录信息之后。
				// token && dispatch('getCartList');
				// token && dispatch('getUserData');
			})
			.catch(e => {
				reject(e)
			})
		})
	},
	// 用户其他相关信息
	getUserData({
		commit
	}) {
		return new Promise((resolve, reject) => {
			http('user.userData').then(res => {
				commit('USER_DATA', res.data);
				resolve(res)
			}).catch(e => {
				reject(e)
			})
		})
	},

	// 退出登录
	logout({
		commit
	}) {
		uni.getStorageSync('token') && http('user.logout');
		commit('token', "");
		commit('isLogin', false);
		commit('userInfo', {});
		commit('USER_DATA', {});
	}
}

const mutations = {
	token(state, payload) {
		state.token = payload;
		uni.setStorageSync("token", payload);
	},
	// 登录态
	isLogin(state, data) {
		state.isLogin = data;
		uni.setStorageSync('isLogin', data);
	},
	// 用户信息
	userInfo(state, data) {
		state.userInfo = data;
		uni.setStorageSync("userInfo", data);
	}
}



export default {
	state,
	mutations,
	actions,
	getters
}
