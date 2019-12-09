<template>
	<div class="hello">
		<div class="nav">
			<router-link to="/views"><img src="@/assets/57.png" alt=""></router-link>
		</div>
		<h2>{{msg}}</h2>
		<div class="box">
			<img src="@/assets/56.png" alt="">
			<p>天呐，还没有人给你评论</p>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		name:'interaction',
		data(){
			return{
				msg:'互动消息'
			}
		}
	}
</script>

<style>
	.hello{width:100%;margin:0 auto;overflow:hidden;text-align:center;}
	.hello .nav{width:10%;height:60px;background:#fff;}
	.hello .nav a img{width:100%;height:36px;display:inline;margin:10px 0;}
	h2{margin-top:20px;}
	.box img{margin-top:80px;}
</style>
