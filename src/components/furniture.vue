<template>
	<div class="hello">
		<div class="nav">
			<input type="text" placeholder="手机">
			<img src="@/assets/rearch.png" alt="">
		</div>
		<div class="daohang">
			<router-link to="/">首页</router-link>
			<router-link to="/furniture">家具</router-link>
			<router-link to="/electronic">电子设备</router-link>
			<router-link to="/book">书籍</router-link>
		</div>
		<img src="@/assets/banner3.jpg" alt="">
		<ul>
			<li v-for="(list,index) in lists">
				<router-link :to="{name:'circumstantial',params:{id:index}}">
					<img :src="list.path" alt="">
					<h5>{{list.password}}</h5>
					<p>{{list.price|formatMoney}}</p>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				msg:'家具',
				lists:[
					{
						path:require('@/assets/13.png'),
						password:'可拆洗沙发椅子单人布艺高腿客厅欧式简易套型商务复古家具小型',
						price:153
					},
					{
						path:require('@/assets/14.png'),
						password:'放被子的专用柜衣柜简易布衣柜链接扣出租屋改造小家具衣柜租房',
						price:95
					},
					{
						path:require('@/assets/15.png'),
						password:'二手货市场旧货市场咸闲鱼官网站淘宝家具捡漏全新清仓电视柜',
						price:254
					},
					{
						path:require('@/assets/16.png'),
						password:'收纳挂衣柜布柜组合小型家用户型单人家具客厅落地布衣柜立式加厚',
						price:84
					},
					{
						path:require('@/assets/17.png'),
						password:' 二手家具柜子清仓免运费咸闲鱼官网淘宝旧货市场捡漏全新特价居简',
						price:114
					},
					{
						path:require('@/assets/18.png'),
						password:'收纳柜简易柜子衣柜储物柜组装柜子成人家用柜家具板式衣柜',
						price:232
					},
					{
						path:require('@/assets/19.png'),
						password:'二手货市场旧货市场咸闲鱼官网站淘宝家具捡漏全新圆凳清仓免运费',
						price:41
					},
					{
						path:require('@/assets/20.png'),
						password:'旧货市场二手清仓家具柜子9成新闲咸鱼官网品如的衣橱特低价处理',
						price:257
					},
					{
						path:require('@/assets/21.png'),
						password:'简约办公桌椅现代二手价办公桌椅办公室家具桌子组装老板带柜子',
						price:298
					},
					{
						path:require('@/assets/22.png'),
						password:'职员办公移动柜文件柜资料柜书桌抽屉柜员工柜储物柜三抽柜床头柜',
						price:160.00
					}
				]
			}
		}
	}
</script>

<style scoped>
	* {margin: 0;padding: 0;}
	ul {list-style: none;}
	a {text-decoration: none;color: #777;}
	.hello .nav {width:100%;height:40px;background:#eef5f5;}
	.hello .nav input {width:70%;height: 30px;border: 0;border-radius: 20px;display: inline-block;outline:none;margin-top:5px;}
	.hello .nav img {width: 5%;display: inline-block;}
	.hello .daohang {width: 100%;height: 41px;background: #fff5f5;}
	.hello .daohang a {width: 20%;display:inline-block;margin:8px 4px;text-align:center;}
	.hello img{width:100%;}
	.hello ul{width:100%;height:1405px;}
	.hello ul li{width:45%;height:255px;border:solid 2px #CCC;float:left;margin:6px;}
	.hello ul li a img{width:95%;margin:2px;}
	.hello ul li a p{color:red;height:36px;line-height:36px;}
	.hello ul li a p img{width:20%;height:36px;float:right;}
</style>
