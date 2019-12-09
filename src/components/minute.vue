<template>
  <div class="hello">
	   <div class="nav">
		<router-link to="/electronic"><img src="@/assets/57.png" alt=""></router-link>
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
  data () {
    return {
      // msg: '商品详情页',
	 lists:[
	 	{
	 		path:require('@/assets/1.png'),
	 		password:'佳能1500D 蚂蚁摄影 照相机高清数码旅游 学生单反相机入门级男女',
	 		price:1690,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/2.png'),
	 		password:'大象摄影Canon/佳能EOS1500D入门级高清数码旅游学生单反照相机',
	 		price:1254,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/3.png'),
	 		password:'Canon/佳能200D 18-55套机入门级单反相机数码高清旅游女生照相机',
	 		price:2788,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/4.png'),
	 		password:'Apple/苹果 iPhone 11 移动联通电信全网通4G智能手机',
	 		price:4508,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/5.png'),
	 		password:'Apple/苹果 iPhone XR 苹果xr iphonexr手机 8x xs max',
	 		price:1199,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/6.png'),
	 		password:'Apple/苹果 iPhone 8 Plus苹果8plus iphone8p苹果8x全新手机',
	 		price:1099,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/7.png'),
	 		password:'西铁城日本石英光动能Hebe明星款玫瑰钢带手表女表正品EM0503',
	 		price:988,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/8.png'),
	 		password:'西铁城旗舰店日本Hebe代言石英光动能手表女表钢带EM0533/0534',
	 		price:1299,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/9.png'),
	 		password:'智能手表男电信4G安卓wifi运动电话手机手表成人定位手表拍照防水运动电话手表',
	 		price:588,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/10.png'),
	 		password:'LED小台灯护眼书桌可充电式大学生宿舍家用寝室学习插电两用台风',
	 		price:28,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/11.png'),
	 		password:'台灯卧室床头灯ins少女温馨台灯创意欧式床头柜台灯台风简约现代',
	 		price:56,
	 		num:1,
	 		goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/12.png'),
	 		password:'现代简约遥控书房卧室床头欧式时尚装饰护眼调光节能LED水晶台灯',
	 		price:48,
	 		num:1,
	 		goodsStore:10
	 	},
	 ],
	  index:this.$route.params.id
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
