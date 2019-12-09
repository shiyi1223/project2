<template>
	<div class="hello">
		<div class="nav">
			<router-link to="/"><img src="@/assets/57.png" alt=""></router-link>
		</div>
		<img :src="lists[index].path" alt="">
		<p>{{lists[index].name}}</p>
		<p>{{lists[index].password}}</p>
		<h2>{{lists[index].price|formatMoney}}</h2>
		
		<div class="box">
			<span @click="addShop(index)">加入购物车</span>
			<span @click="shopping(index)">立即购买</span>
		</div>
	</div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
	  lists:[
	  	{
	  		path:require('@/assets/1.png'),
	  		name:'佳能1500D 蚂蚁摄影 照相机高清数码旅游 学生单反相机入门级男女',
	  		price:1690,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path: require('@/assets/13.png'),
	  		name: '可拆洗沙发椅子单人布艺高腿客厅欧式简易套型商务复古家具小型',
	  		price: 153,
			num:1,
			goodsStore:10
	  		},
	  	{
	  		path:require('@/assets/23.jpg'),
	  		name:'芙丽芳丝水乳芙丽芳水乳，芙丽芳水乳',
	  		price:85,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/24.jpg'),
	  		name:'SK2小灯泡50ml sk2小灯泡 带专柜购物小票 全新正品',
	  		price:65,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/25.jpg'),
	  		name:'cemoy澳洲21天极光晚安精华液面部童颜补水原液收缩毛孔',
	  		price:45,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/26.jpg'),
	  		name:'富光FGA保温杯儿童带吸管两用小学生防摔水杯幼儿园保温壶大容',
	  		price:75,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/1.png'),
	  		name:'佳能1500D 蚂蚁摄影 照相机高清数码旅游 学生单反相机入门级男女',
	  		price:1690,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/27.jpg'),
	  		name:'全新正品膳魔师保温女士可爱保温杯生日礼物',
	  		price:88,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/28.jpg'),
	  		name:'苏泊尔毛衣服起球修剪器充电式家用衣物打毛机剃刮吸去除毛球神器',
	  		price:14.5,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path: require('@/assets/17.png'),
	  		name: ' 二手家具柜子清仓免运费咸闲鱼官网淘宝旧货市场捡漏全新特价居简',
	  		price: 114,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/30.jpg'),
	  		name:'伊丽莎白雅顿身体乳400ml雅顿蜜滴身体霜保湿滋润500ml',
	  		price:48,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path: require('@/assets/19.png'),
	  		name: '二手货市场旧货市场咸闲鱼官网站淘宝家具捡漏全新圆凳清仓免运费',
	  		price: 41,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/22.png'),
	  		name:'职员办公移动柜文件柜资料柜书桌抽屉柜员工柜储物柜三抽柜床头柜',
	  		price:160.00,
			num:1,
			goodsStore:10
	  	},
	  	{
	  		path:require('@/assets/17.png'),
	  		name:' 二手家具柜子清仓免运费咸闲鱼官网淘宝旧货市场捡漏全新特价居简',
	  		price:114,
			num:1,
			goodsStore:10
	  	},
	  ],
	  index:this.$route.params.id
    }
  },
  methods:{
	  addShop(index){
		  // console.log(index)
		  alert('已加入购物车')
		  this.$store.commit('addlist',index)
	  },
	  shopping(index){
		alert('购买成功');
		// this.showFlag=true;
		// this.deleteId=index;
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
	.hello img{width:100%;height:350px;}
	.hello p{width:100%;margin:0 auto;font-size:24px;color:#777;}
	.hello h2{width:100%;margin:0 auto;color:red}
	.hello .box{width:100%;height:50px;background:red;text-align:center;position:absolute;bottom:50px;}
	.hello .box span{width:47%;height:50px;font-size:24px;line-height:50px;display:inline-block;color:#fff;margin:0 3px;}
</style>
