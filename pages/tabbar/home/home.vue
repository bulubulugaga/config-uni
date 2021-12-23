<template>
	<view>
		<van-cell-group>
		  <van-cell title="单元格" value="内容" />
		  <van-cell title="单元格" value="内容" label="描述信息" :border="false" />
		</van-cell-group>
		<van-button round type="info" @click="getUserInfo">需登录接口测试</van-button>
		<van-button round type="info" @click="getList">无需登录接口测试</van-button>
	</view>
</template>

<script>
	import { mapState, mapActions, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapGetters(['isLogin', 'userInfo'])
		},
		onLoad() {
			console.log(this.isLogin, this.userInfo);
		},
		methods: {
			...mapActions(['getUserInfo']),
			getList() {
				this.$http('common.init').then(res => {
					if(res.code === 200) {
						// 请求正确之后 do something
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	
</style>
