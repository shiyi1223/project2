<template>
  <div id="app">
		<router-view/>
		<div class="bottom">
			<ul>
				<li>
					<router-link to="/">
						<img src="@/assets/home1.png" alt=""><br>
						<p>首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/service">
						<img src="@/assets/46.png" alt=""><br>
						<p>卖二手</p>
					</router-link>
				</li>
				<li>
					<router-link to="/views">
						<img src="@/assets/view1.png" alt=""><br>
						<p>消息</p>
					</router-link>
				</li>
				<li>
					<router-link to="/my">
						<img src="@/assets/mine1.png" alt=""><br>
						<p>我的</p>
					</router-link>
				</li>
			</ul>
		</div>	
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
	a{text-decoration:none;}
	*{margin:0;padding:0;}
	.bottom ul{list-style:none;width:100%;position:fixed;bottom:0px;background:#eef5f5;text-align:center;z-index:999;}
	.bottom li{width:25%;float:left;text-align:center;color:#777;}
	.bottom ul li a img{width:25%;display:inline-block;}
	.bottom ul li a p{text-align:center;}
</style>
