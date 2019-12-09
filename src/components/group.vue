<template>
	<div class="hello">
		<div class="nav">
			<router-link to="/my"><img src="@/assets/57.png" alt=""></router-link>
		</div>
		<h1>{{lists[index].name}}</h1>
		<img :src="lists[index].path" alt="">
	</div>
</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				lists:[
					{
						path:require('@/assets/34.png'),
						name:'客服中心'
					},
					{
						path:require('@/assets/35.png'),
						name:'我的订阅'
					},
					{
						path:require('@/assets/36.png'),
						name:'我的拼团'
					},
					{
						path:require('@/assets/37.png'),
						name:'借钱'
					},
					{
						path:require('@/assets/38.png'),
						name:'平台规则'
					},
					{
						path:require('@/assets/39.png'),
						name:'活动报名'
					},
					{
						path:require('@/assets/40.png'),
						name:'领新人红包'
					},
					{
						path:require('@/assets/41.png'),
						name:'办信用卡'
					},
					{
						path:require('@/assets/42.png'),
						name:'领劵中心'
					},
					{
						path:require('@/assets/43.png'),
						name:'活动扫码'
					},
					{
						path:require('@/assets/44.png'),
						name:'天天抽奖'
					},
					{
						path:require('@/assets/45.png'),
						name:'签到送礼'
					},	
				],
				index: this.$route.params.id
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{width:100%;margin:0 auto;}
	.hello .nav{width:10%;height:60px;background:#fff;}
	.hello .nav a img{width:100%;height:36px;display:inline;margin:10px 0;}
	a{text-decoration:none;}
	img{width:100%;}
	p{width:100%;margin:0 auto;font-size:24px;color:#777;}
	h2{color:red}
</style>
