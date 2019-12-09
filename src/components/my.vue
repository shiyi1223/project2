<template>
  <div class="hello">
		<div class="aTop">
			<img src="@/assets/30.png" alt=""><br>
			<router-link to="/login">登录</router-link>
			<ul>
				<li>
					<p>-</p>
					<router-link to="/shop">购物车</router-link>
				</li>
				<li>
					<p>-</p>
					<router-link to="/">足迹</router-link>
				</li>
				<li>
					<p>-</p>
					<router-link to="/">我买到的</router-link>
				</li>
				<li>
					<p>-</p>
					<router-link to="/">账单</router-link>
				</li>
			</ul>
		</div>
		<div class="aHead">
			<h2>我的交易</h2>
			<ul>
				<li>
					<img src="@/assets/195.png" alt="">
					<p>我发布的</p>
				</li>
				<li>
					<img src="@/assets/31.png" alt="">
					<p>我卖出的</p>
				</li>
				<li>
					<img src="@/assets/32.png" alt="">
					<p>我买到的</p>
				</li>
				<li>
					<img src="@/assets/33.png" alt="">
					<p>我收藏的</p>
				</li>
			</ul>
		</div>
		<div class="main">
			<h2>推荐工具</h2>
			<ul>
				<li v-for="(list,index) in lists">
					<router-link :to="{name:'group',params:{id:index}}">
						<img :src="list.path" alt="">
						<p>{{list.name}}</p>
					</router-link>
					
				</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '立即登录',
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
			]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{text-decoration:none;color:#777}
	*{margin:0;padding:0;text-align:center;}
	ul{list-style:none;}
	.aTop{width:100%;height:180px;}
	.aTop img{width:20%;margin:10px 0;}
	.aTop ul li{width:25%;float:left;margin:5px 0;}
	
	.aHead{width:100%;height:133px;}
	.aHead h2{margin-bottom:10px;}
	.aHead ul{width:100%;margin:0 auto;}
	.aHead ul li{width:25%;height:70px;float:left;margin:10px 0;color:#777}
	.aHead ul li img{width:40%;}
	
	.main{width:100%;height:301px;}
	.main ul{width:100%;margin:0 auto;}
	.main ul li{width:25%;height:70px;float:left;margin:10px 0;color:#777}
	.main ul li a img{width:36px;height:36px;}
</style>
