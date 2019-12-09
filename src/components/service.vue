<template>
  <div class="hello">
		<span>发布攻略</span>
		<span>定价参考</span>
		<ul>
			<li v-for="(list,index) in lists">
				<router-link to="/service">
					<img :src="list.path" alt="">
					<p>{{list.name}}</p>
				</router-link>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      // msg: '验过的，更放心',
			lists:[
				{
					path:require('@/assets/47.png'),
					name:'发布闲置'
				},
				{
					path:require('@/assets/48.png'),
					name:'卖手机'
				},
				{
					path:require('@/assets/49.png'),
					name:'图书回收'
				},
				{
					path:require('@/assets/50.png'),
					name:'卡劵回收'
				},
				{
					path:require('@/assets/51.png'),
					name:'欢乐送'
				},
				{
					path:require('@/assets/52.png'),
					name:'拍卖报名'
				}
			]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {margin: 0;padding: 0;}
	ul {list-style: none;}
	a {text-decoration: none;color:#777;}
	.hello{width:100%;overflow:hidden;text-align:center;}
	.hello span{width:35%;height:100px;margin:20px;font-size:24px;display:inline-block;}
	.hello ul{width:100%;margin-top:100px;}
	.hello ul li{width:33.3%;float:left;}
	.hello ul li img{width:60%;}
	.hello ul li p{text-align:center;}
</style>
