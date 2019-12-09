<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<img src="" alt="">
		<router-view></router-view>
			
		<!-- 登录方式 -->
		用户名：<input type="text"><br>
		密码：<input type="password"><br>
		<button><router-link to="/">登录</router-link></button><button>重置</button><br>
		<router-link to="/login">QQ登录</router-link>
		<router-link to="/login/loginType2">微信登录</router-link>
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: '登录'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{text-align:center;}
	a{text-decoration:none;color:#242424;text-align:center;}
	input{display:inline-block;width:70%;height:50px;border:0;margin:10px 0;text-align:center;}
	button{width:70px;height:30px;margin:10px;text-align:center;}
</style>
