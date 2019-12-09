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
		<img src="@/assets/banner2.jpg" alt="">
		<ul>
			<li v-for="(list,index) in lists">
				<router-link :to="{name:'minute',params:{id:index}}">
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
				msg:'电子设备',
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
				]
			}
		}
	}
</script>

<style scoped>
	* {margin: 0;padding: 0;}
	ul {list-style: none;}
	a {text-decoration: none;color: #777;}
	.hello{overflow:hidden;}
	.hello .nav {width:100%;height:40px;background:#eef5f5;}
	.hello .nav input {width:70%;height: 30px;border: 0;border-radius: 15px;display: inline-block;outline:none;margin-top:5px;}
	.hello .nav img {width: 5%;display: inline-block;}
	.hello .daohang {width: 100%;height: 41px;background: #fff5f5;}
	.hello .daohang a {width: 20%;display:inline-block;margin:8px 4px;text-align:center;}
	.hello img{width:100%;}
	.hello ul{width:100%;height:1680px;}
	.hello ul li{width:45%;height:255px;border:solid 2px #CCC;float:left;margin:6px;}
	.hello ul li a img{width:95%;margin:2px;}
	.hello ul li a p{color:red;height:36px;line-height:36px;}
	.hello ul li a p img{width:20%;height:36px;float:right;}
</style>
