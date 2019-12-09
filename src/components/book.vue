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
		<img src="@/assets/banner1.jpg" alt="">
		<ul>
			<li v-for="(list,index) in lists">
				<router-link :to="{name:'explicit',params:{id:index}}">
					<img :src="list.path" alt="">
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
				lists:[
					{
						path:require('@/assets/1.jpg'),
						price:10.00
					},
					{
						path:require('@/assets/2.jpg'),
						price:16.00
					},
					{
						path:require('@/assets/3.jpg'),
						price:8.00
					},
					{
						path:require('@/assets/4.jpg'),
						price:6.00
					},
					{
						path:require('@/assets/5.jpg'),
						price:11.00
					},
					{
						path:require('@/assets/6.jpg'),
						price:15.00
					},
					{
						path:require('@/assets/7.jpg'),
						price:12.00
					},
					{
						path:require('@/assets/8.jpg'),
						price:7.00
					},
					{
						path:require('@/assets/9.jpg'),
						price:8.00
					},
					{
						path:require('@/assets/10.jpg'),
						price:9.00
					},
					{
						path:require('@/assets/11.jpg'),
						price:9.00
					},
					{
						path:require('@/assets/12.jpg'),
						price:8.00
					},
				]
			}
		}
	}
</script>

<style scoped>
	* {margin: 0;padding: 0;}
	ul {list-style: none;}
	a {text-decoration: none;color: #000;}
	.hello .nav {width:100%;height:40px;background:#eef5f5;}
	.hello .nav input {width:70%;height: 30px;border: 0;border-radius: 15px;display: inline-block;outline:none;margin-top:5px;}
	.hello .nav img {width: 5%;display: inline-block;}
	.hello .daohang {width: 100%;height: 41px;background: #fff5f5;}
	.hello .daohang a {width: 20%;display:inline-block;margin:8px 4px;text-align:center;}
	.hello img{width:100%;}
	.hello ul{width:100%;height:1830px;}
	.hello ul li{width:45%;height:280px;border:solid 2px #CCC;float:left;margin:6px;}
	.hello ul li a img{width:95%;height:236px;margin:2px;}
	.hello ul li a p{color:red;height:36px;line-height:36px;}
	.hello ul li a p img{width:20%;height:36px;float:right;}	
</style>
