/**
 * 接口列表文件
 */
export default {

	/** 公共 ↓ **/
	common: {
		init: {
			url: "index/init",
			auth: false,
			method: "GET",
			// desc: '初始化数据',end
		},
		upload: {
			url: "index/upload",
			auth: true,
			method: "POST",
			// desc: '上传图片',
		}
	},

	/** 检查表 ↓ **/
	check_list: {
		info: {
			url: "check_list/detail",
			auth: false,
			method: "GET",
			// desc: '分类类别',
		},
	},


	/** 用户 ↓ **/
	user: {

		accountLogin: {
			url: "user/accountLogin",
			auth: false,
			method: "POST",
			// desc: '账号密码登录',
		},

		changePwd: {
			url: "user/changePwd",
			auth: true,
			method: "POST",
			// desc: '修改密码',
		},

		info: {
			url: "user",
			auth: true,
			method: "GET",
			// desc: '用户信息',end
		},

		profile: {
			url: "user/profile",
			auth: true,
			method: "POST",
			// desc: '修改用户信息',end
		},
		
		logout: {
			url: "user/logout",
			auth: true,
			method: "POST",
			// desc: '退出登录',end
		}
	}

};
