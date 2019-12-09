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
		
		<div class="slide">
			<div class="slideshow">
				<ul>
					<li v-for="(img, index) in imgArray" :key="index" v-show="index===mark">
						<a href="#">
							<img :src='img'>
						</a>
					</li>
				</ul>
			</div>
			<div class="bar">
				<span v-for="(item, index) in imgArray" :key="index" :class="{'active':index===mark}"></span>
			</div>
		</div>
		<div class="box">
			<ul>
				<li v-for="(list,index) in lists">
					<router-link :to="{name:'detail',params:{id:index}}">
						<img :src="list.path" alt="">
						<p>{{list.name}}</p>
						<h4>{{list.price|formatMoney}}</h4>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<transition-group tag="ul" name="image">
	<li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
		<a href="#">
			<img :src='img'>
		</a>
	</li>
</transition-group>

<script>
	export default {
		name: 'home',
		data() {
			return {
				msg: '首页',
				mark:0,
				imgArray: [
					require('@/assets/banner1.png'),
					require('@/assets/banner2.png'),
					require('@/assets/banner3.png'),
					require('@/assets/banner4.png')
				],
				lists:[
					{
						path:require('@/assets/1.png'),
						name:'佳能1500D 蚂蚁摄影 照相机高清数码旅游 学生单反相机入门级男女',
						price:1690
					},
					{
						path: require('@/assets/13.png'),
						name: '可拆洗沙发椅子单人布艺高腿客厅欧式简易套型商务复古家具小型',
						price: 153
						},
					{
						path:require('@/assets/23.jpg'),
						name:'芙丽芳丝水乳芙丽芳水乳，芙丽芳水乳',
						price:85
					},
					{
						path:require('@/assets/24.jpg'),
						name:'SK2小灯泡50ml sk2小灯泡 带专柜购物小票 全新正品',
						price:65
					},
					{
						path:require('@/assets/25.jpg'),
						name:'cemoy澳洲21天极光晚安精华液面部童颜补水原液收缩毛孔',
						price:45
					},
					{
						path:require('@/assets/26.jpg'),
						name:'富光FGA保温杯儿童带吸管两用小学生防摔水杯幼儿园保温壶大容',
						price:75
					},
					{
						path:require('@/assets/1.png'),
						name:'佳能1500D 蚂蚁摄影 照相机高清数码旅游 学生单反相机入门级男女',
						price:1690
					},
					{
						path:require('@/assets/27.jpg'),
						name:'全新正品膳魔师保温女士可爱保温杯生日礼物',
						price:88
					},
					{
						path:require('@/assets/28.jpg'),
						name:'苏泊尔毛衣服起球修剪器充电式家用衣物打毛机剃刮吸去除毛球神器',
						price:14.5
					},
					{
						path: require('@/assets/17.png'),
						name: ' 二手家具柜子清仓免运费咸闲鱼官网淘宝旧货市场捡漏全新特价居简',
						price: 114
					},
					{
						path:require('@/assets/30.jpg'),
						name:'伊丽莎白雅顿身体乳400ml雅顿蜜滴身体霜保湿滋润500ml',
						price:48
					},
					{
						path: require('@/assets/19.png'),
						name: '二手货市场旧货市场咸闲鱼官网站淘宝家具捡漏全新圆凳清仓免运费',
						price: 41
					},
					{
						path:require('@/assets/22.png'),
						name:'职员办公移动柜文件柜资料柜书桌抽屉柜员工柜储物柜三抽柜床头柜',
						price:160.00
					},
					{
						path:require('@/assets/17.png'),
						name:' 二手家具柜子清仓免运费咸闲鱼官网淘宝旧货市场捡漏全新特价居简',
						price:114
					},
				]
			}
		},
		methods: {
			autoPlay() {
				this.mark++;
				if (this.mark === 4) { //当遍历到最后一张图片置零
					this.mark = 0
				}
			},
			play() {
				setInterval(this.autoPlay, 2500)
			},
			change(i) {
				this.mark = i
			}
		},
		created() {
			this.play()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	* {margin: 0;padding: 0;}
	ul {list-style: none;}
	a {text-decoration: none;color:#777;text-align:left;}
	.hello .nav {width:100%;height:40px;background:#eef5f5;text-align:center;}
	.hello .nav input {width:70%;height: 30px;border: 0;border-radius: 20px;display: inline-block;outline:none;margin-top:5px;text-align:center;}
	.hello .nav img {width: 6%;}
	.hello .daohang {width: 100%;height: 41px;background: #fff5f5;}
	.hello .daohang a {width: 20%;display:inline-block;margin:8px 4px;text-align:center;}
	.hello .slide {width: 100%;height:200px;margin: 0 auto;margin-top:10px;overflow: hidden;position: relative;}
	.hello .slideshow {width: 100%;height: 200px;}
	.hello .slide .slideshow ul li {position: absolute;}
	.hello .slide .slideshow img {width:100%;height:200px;}
	.hello .bar {position: absolute;width:100%;bottom:10px;margin: 0 auto;z-index: 10;text-align: center;}
	.hello .bar span {width: 20px;height: 5px;border: 1px solid;background: white;display: inline-block;margin-right: 10px;}
	.hello .active {background: #CCC !important;}
	.image-enter-active {transform: translateX(0);transition: all 1.5s ease;}
	.image-leave-active {transform: translateX(-100%);transition: all 1.5s ease;}
	.image-enter {transform: translateX(100%);
	}
	.image-leave {transform: translateX(0);}
	.hello .box{width:100%;height:2100px;overflow:hidden;}
	.hello .box ul li{width:48%;height:285px;float:left;margin:2px;border:solid 1px #CCC;overflow:hidden;}
	.hello .box ul li a img{width:100%;height:172px;}
	.hello .box ul li a h4{color:red;height:36px;line-height:36px;}
	.hello .box ul li a h4 img{width:20%;height:36px;float:right;}
</style>
