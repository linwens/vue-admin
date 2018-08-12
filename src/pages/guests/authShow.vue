<template>
	<div id="auth_tips">
		<el-card>
			<div class="u-authTips" v-if="roles==='mc'">
				这条信息只有神秘用户才能看得见
			</div>
			<div class="u-authTips" v-else>
				这是一个权限测试页面，可退出登录后输入任意账号再次登录查看效果。
				<el-button type="success" plain @click="logout">退出登录</el-button>
			</div>
		</el-card>
	</div>
</template>
<script>
	
	export default{
		name:'auth_tips',
		data:function(){
			return{

			}
		},
		computed:{
			roles(){
				let role = this.$store.state.user.type;
				return role
			}
		},
		methods:{
		  	logout (){
		    	this.$store.dispatch('USER_LOGOUT')
		    	//退出跳转到登录页
		    	window.location.reload();
		  },
		},

	}
</script>
<style lang="less"></style>