<template>
  <div class="hello">
		<h1>{{ msg }}</h1>
		<ul>
			<li>
				<router-link to="/transaction">
					<img src="@/assets/53.png" alt="">
					<p>交易消息</p>
				</router-link>
			</li>
			<li>
				<router-link to="/leave">
					<img src="@/assets/54.png" alt="">
					<p>留言消息</p>
				</router-link>
			</li>
			<li>
				<router-link to="/interaction">
					<img src="@/assets/55.png" alt="">
					<p>互动消息</p>
				</router-link>
			</li>
		</ul>
		<img src="@/assets/56.png" alt="">
		<p>还没有收到过用户聊天信息哦</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '消息中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{margin:0;padding:0;}
	ul{list-style:none;}
	a{text-decoration:none;color:#777;}
	
	.hello{overflow:hidden;text-align:center;}
	.hello h1{margin:20px 0;}
	.hello ul{width:100%;height:100px;margin:20px 0;}
	.hello ul li{width:33.3%;height:80px;margin:10px 0;float:left;}
	.hello ul li a img{width:35%;}
	.hello ul li a p{text-align:center;color:#777;}
</style>
