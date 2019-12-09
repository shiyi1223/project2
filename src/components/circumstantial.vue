<template>
	<div class="hello">
		<div class="nav">
			<router-link to="/furniture"><img src="@/assets/57.png" alt=""></router-link>
		</div>
		<img :src="lists[index].path" alt="">
		<h1>{{lists[index].name}}</h1>
		<p>{{lists[index].password}}</p>
		<h2>{{lists[index].price|formatMoney}}</h2>
		<div class="box">
			<span @click="addShop(index)">加入购物车</span><span @click="shopping">立即购买</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detail',
		data() {
			return {
				// msg: '商品详情页',
				lists: [{
						path: require('@/assets/13.png'),
						password: '可拆洗沙发椅子单人布艺高腿客厅欧式简易套型商务复古家具小型',
						price: 153,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/14.png'),
						password: '放被子的专用柜衣柜简易布衣柜链接扣出租屋改造小家具衣柜租房',
						price: 95,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/15.png'),
						password: '二手货市场旧货市场咸闲鱼官网站淘宝家具捡漏全新清仓电视柜',
						price: 254,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/16.png'),
						password: '收纳挂衣柜布柜组合小型家用户型单人家具客厅落地布衣柜立式加厚',
						price: 84,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/17.png'),
						password: ' 二手家具柜子清仓免运费咸闲鱼官网淘宝旧货市场捡漏全新特价居简',
						price: 114,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/18.png'),
						password: '收纳柜简易柜子衣柜储物柜组装柜子成人家用柜家具板式衣柜',
						price: 232,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/19.png'),
						password: '二手货市场旧货市场咸闲鱼官网站淘宝家具捡漏全新圆凳清仓免运费',
						price: 41,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/20.png'),
						password: '旧货市场二手清仓家具柜子9成新闲咸鱼官网品如的衣橱特低价处理',
						price: 257,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/21.png'),
						password: '简约办公桌椅现代二手价办公桌椅办公室家具桌子组装老板带柜子',
						price: 298,
						num:1,
						goodsStore:10
					},
					{
						path: require('@/assets/22.png'),
						password: '职员办公移动柜文件柜资料柜书桌抽屉柜员工柜储物柜三抽柜床头柜',
						price: 160.00,
						num:1,
						goodsStore:10
					}
				],
				index: this.$route.params.id
			}
		},
		methods:{
			shopping(){
				alert('购买成功')
			},
			addShop(index){
				// console.log(index)
				alert('已加入购物车')
				this.$store.commit('addlist',index)
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello{width:100%;margin:0 auto;}
	.hello .nav{width:10%;height:60px;background:#fff;}
	.hello .nav a img{width:100%;height:36px;display:inline;margin:10px 0;}
	.hello a{text-decoration:none;}
	.hello img{width:100%;height:340px;}
	.hello p{width:100%;margin:0 auto;font-size:24px;color:#777;}
	.hello h2{color:red}
	.hello .box{width:100%;height:50px;background:red;text-align:center;position:absolute;bottom:50px;}
	.hello .box span{width:47%;height:50px;font-size:24px;line-height:50px;display:inline-block;color:#fff;margin:0 3px;}
</style>
