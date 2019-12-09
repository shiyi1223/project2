<template>
  <div class="hello">
	  <div class="nav">
	  	<router-link to="/book"><img src="@/assets/57.png" alt=""></router-link>
	  </div>
		<img :src="lists[index].path" alt="">
		<h1>{{lists[index].name}}</h1>
		<h2>{{lists[index].price|formatMoney}}</h2>
		<p>{{lists[index].password}}</p>
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
      msg: '商品详情页',
	 lists:[
	 	{
	 		path:require('@/assets/1.jpg'),
	 		price:10.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/2.jpg'),
	 		price:16.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/3.jpg'),
	 		price:8.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/4.jpg'),
	 		price:6.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/5.jpg'),
	 		price:11.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/6.jpg'),
	 		price:15.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/7.jpg'),
	 		price:12.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/8.jpg'),
	 		price:7.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/9.jpg'),
	 		price:8.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/10.jpg'),
	 		price:9.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/11.jpg'),
	 		price:9.00,
			num:1,
			goodsStore:10
	 	},
	 	{
	 		path:require('@/assets/12.jpg'),
	 		price:8.00,
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
	.hello img{width:80%;margin:0 40px;}
	.hello p{width:100%;margin:0 auto;font-size:24px;color:#777;}
	.hello h2{color:red;width:80%;margin:0 auto;}
	.hello .box{width:100%;height:50px;background:red;text-align:center;position:absolute;bottom:50px;}
	.hello .box span{width:47%;height:50px;font-size:24px;line-height:50px;display:inline-block;color:#fff;margin:0 3px;}
</style>
