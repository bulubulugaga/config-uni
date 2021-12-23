<script>
	import wechat from '@/common/wechat/wechat';
	export default {
		onLaunch: function() {
			wechat.checkMiniProgramUpdate();
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "/wxcomponents/vant/dist/common/index.wxss";
</style>
