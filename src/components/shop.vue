<template>
	<div class="app">
		<div class="w1000" id="shopping_cart_contain">
			<div class="cart-x">
				<div class="tit" id="cart_list_head">
					<table>
						<tr>
							<th class="td01">商品信息</th>
							<th class="td02">单价</th>
							<th class="td03">数量</th>
							<th class="td03">操作</th>
						</tr>
					</table>
				</div>
				
				<!-- 购买的商品 -->
				<div id="cart_list_temp" v-for="(good,index) in goodsList">
					<input type="checkbox" @click="selectGood(good)" :checked="good.isChecked">
					<div class="list">
						<div class="table-box-tip">
							<div class="list-orders" id="0_0"></div>
						</div>
						<table>
							<tbody>
								<tr size_id="945130203" cart_id="34436204">
									<td class="td01">
										<div class="pic">
											<a href="http://product.lefeng.com/product/351127570.html" target="_blank">
												<img width="58" height="74" :src="good.path" alt=""></a>
										</div>
									</td>
									<td class="td02">
										<span class="m-price">
											<strong class="u-price">{{good.price|money}}</strong>
										</span>
									</td>
									<td class="td03">
										<div class="quantity">
											<a href="javascript:void(0);" class="l-y" action="minus" @click="changeNum(good,false)">-</a>
											<input type="text" class="tip" size_id="945130203" name="" v-model="good.num">
											<a href="javascript:void(0);" action="add" class="r-y" @click="changeNum(good,true)">+</a>
											<div class="cart-error"></div>
										</div>
									</td>
									<td class="td05">
										<a href="javascript:void(0);" class="del" value="945130203" @click="getIndex(index)">删除</a>
										<div class="cart-error"></div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="cart-j">
				<div class="cart-b cart-bt">
					<p><input type="checkbox" :checked="selectAllFlag" @click="selectAllGoods">&nbsp;&nbsp;全选/全不选</p>
					<ul id="totalPayPrice">
						<li class="ov-pre">
							<label class="fl">总金额</label>
							<span class="fr">
								<strong class="u-price">{{totalPrice | formatMoney}}</strong></span>
						</li>
					</ul>
				</div>
				<div class="cart-js">
					<div class="fl">
						<a href="/" mars_sead="lpc_xf_buy">继续购物</a>
						<a href="http://shopping.lefeng.com/showCart#" mars_sead="lpc_xf_buy"></a>
					</div>
					<div class="fr">
						<input name="" type="button" value="立即结算" class="pre" id="settlement" mars_sead="lpc_xf_cart" @click="shopping"></div>
				</div>
			</div>
		</div>
		
		<!--删除-->
		<div class="cart-jscs" v-show="showFlag">
			<i></i>
			<div class="box">
				<div class="tit">删除<span @click="showFlag = false"></span></div>
				<p>删掉的商品可能被别人抢走哦~要删除吗？</p>
				<div class="but"><input name="" type="button" value="删除" class="over" @click="deleteGood"> 
				<input name="" type="button" value="先留着" class="hy" @click="showFlag = false">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'App',
		data(){
			return{
				goodsList:this.$store.state.addCart,
				totalPrice:0,
				selectAllFlag:false,
				showFlag:false,
				deleteId:'',
				selectList:[]
			}
		},
		// 局部过滤器
		filters:{
			money(value){
				//toFixed(n) n代表保留小数的位数
				return value.toFixed(2)+'元';
			}
		},
		methods:{
			shopping(){
				alert('购买成功')
			},
			//改变商品的数量
			changeNum(obj,flag){
				if(flag){
					//判断是否超过最大的库存
					if(obj.num<obj.goodsStore){
						obj.num++;
					}
				}else{
					// 判断是否少于1
					if(obj.num>1){
						obj.num--;
					}
				}
			},
			getIndex(index){
				//显示遮罩层
				this.showFlag=true;
				this.deleteId=index;
			},
			
			//删除商品
			deleteGood(){
				var obj=this.goodsList[this.deleteId];
				var index=this.selectList.indexOf(obj)
				if(index>0){
					this.selectList.splice(index,1)
				}
				this.goodsList.splice(this.deleteId,1)
				
				//关闭遮罩层
				this.showFlag=false;
			},
			
			//选中单个商品
			selectGood(obj){
				if(obj.isChecked==undefined){
					//设置一个isChecked属性
					this.$set(obj,'isChecked',true);
				}else{
					obj.isChecked=!obj.isChecked;
				}
				
				console.log(obj.isChecked)
				//检测当前商品是否选中
				if(obj.isChecked){
					this.selectList.push(obj);
				}else{
					//从选中的商品中删除
					var index=this.selectList.indexOf(obj);
					this.selectList.splice(index,1);
				}
				
				console.log(this.selectList)
				//判断是否全部选中
				if(this.goodsList.length==this.selectList.length){
					this.selectAllFlag=true;
				}else{
					this.selectAllFlag=false;
				}
			},
			// 全选或者全不选
			selectAllGoods(){
				this.selectAllFlag=!this.selectAllFlag;
				//清空当前选中的商品
				this.selectList=[];
				//箭头函数改变this问题
				this.goodsList.forEach((obj)=>{
					console.log(obj.isChecked)
					this.$set(obj,'isChecked',this.selectAllFlag)
					if(this.selectAllFlag){
						// 将每个选中的商品压入selectList
						this.selectList.push(obj)
					}
				})
				console.log(this.selectList)
			},
			
			totalPayPrice(){
				//将总价清零
				this.totalPrice=0;
				this.selectList.forEach((obj)=>{
					this.totalPrice+=obj.price*obj.num;
				})
			}
		},
		watch:{
			selectList:{
				handler(){
					this.totalPayPrice()
				},
				deep:true
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.selectAllGoods()
			})
		}	
	}
</script>

<style>
@charset "utf-8";
	
	/* .app{width:100%;height:568px;} */
	html {background-attachment: fixed;}
	body {color: #666;font-size: 12px;font-family: tahoma, arial;background: #f5f5f5;background-attachment: fixed;width: 100%;}
	body.dealBK {background: #4c0101 !important;}
	body {width: 100%;}
	body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,form,input,textarea,p,th,td,tr,table,tbody {margin: 0;padding: 0;}
	table {border-collapse: collapse;border-spacing: 0}
	ol,ul,li{list-style-type: none;}
	img {border: 0 none;}
	h1,h2,h3,h4,h5,h6 {font-size: 12px;font-weight: normal;}

	b,
	em {
		font-style: normal;
		font-weight: normal;
	}

	a {
		color: #666;
		text-decoration: none;
	}

	.clearfloat:after {
		display: block;
		clear: both;
		content: "";
		visibility: hidden;
		height: 0
	}

	.clearfloat {
		zoom: 1
	}

	*:focus {
		outline: none !important;
	}

	/*cart.css*/
	body {
		background: #fff;
	}

	body.bj {
		background: #f8f8f8;
	}

	.w1000 {
		width:80% !important;
		margin: 0 auto;
	}

	.cart-x .tit {
		height: 36px;
		background: #f9f9f9;
		border: 1px solid #dfdfdf;
		border-left: 2px solid #f52648;
		font-family: "\5FAE\8F6F\96C5\9ED1";
		color: #f52648;
		line-height: 36px;
	}

	.cart-x .tit span {
		margin: 0 10px;
		line-height: 36px;
		font-size: 12px;
		color: #333;
		float: left;
	}

	.cart-x .tit a.fh {
		font-family: "\5B8B\4F53";
		float: right;
		line-height: 36px;
		color: #7ebd2a;
		margin-right: 15px;
	}

	.cart-x .tit table {
		margin: 0 10px;
		/* font-size: 14px; */
		font-weight: normal;
		height: 36px;
		width: 100%;
	}

	.cart-x .tit table th {
		line-height: 36px;
		font-weight: normal;
	}

	.cart-x table .td01 {
		width: 20%;
		text-align: left;
	}

	.cart-x table .td02 {
		width: 12%;
		text-align: center;
	}

	.cart-x table .td03 {
		width: 15%;
		text-align: center;
	}

	.cart-x table .td05 {
		text-align: center;
		width: 15%;
	}

	.cart-x .list {
		height:90px;
		border: 1px solid #dfdfdf;
		border-top: none;
	}

	.cart-x .list table {
		margin: 0 10px;
		font-size: 14px;
		font-weight: normal;
		height: 30px;
		width:100%;
		font-size: 12px;
		margin-top: -1px;
	}

	.cart-x .list table tr {
		margin-bottom: 10px;
	}

	.cart-x .list table td {
		height: 90px;
	}

	.cart-x .list table td.td01 .pic {
		float: left;
		box-shadow: 0 1px 2px #dfdfdf;
		position: relative;
		/* margin: 20px 0; */
	}

	.cart-x .list table td.td01 .name {
		width: 30%;
		height: 40px;
		line-height: 20px;
		overflow: hidden;
		margin-top: 5px;
	}

	.cart-x .list table td.td01 .size {
		width:30%;
		height: 20px;
		line-height: 20px;
		overflow: hidden;
	}

	.cart-x .list table td.td01 .fr {
		float: left;
		/* margin-left: 35px; */
		/* margin-top: 20px; */
	}

	.cart-x .list table td.td01 .fr .zp {
		color: #939393;
		line-height: 1.0;
		margin-top: 12px;
	}

	.cart-x .list table .max-pic {
		position: absolute;
		top: 0;
		left: 67px;
		width: 45%;
		height: 200px;
		border: 1px solid #dbdada;
		background: #fff;
		box-shadow: 0 1px 2px #dfdfdf;
		z-index: 5;
	}

	.cart-x .list table .max-pic-l {
		top: 0;
		left: 10px;
		width: 10px;
		height: 100%;
		text-shadow: 0 0 4px #dfdfdf;
		position: absolute;
	}

	.cart-x .list table .max-pic-l .arrow-out {
		position: absolute;
		width: 14px;
		text-align: left;
		height: 14px;
		top: 20px;
		right: 12px;
		color: #dbdada;
	}

	.cart-x .list table .max-pic-l .arrow {
		position: absolute;
		width: 14px;
		text-align: left;
		height: 14px;
		top: 20px;
		right: 11px;
		color: #fff;
	}

	.cart-x .list table .max-pic-t {
		position: relative;
		background-color: #fff;
		padding: 5px;
	}

	.cart-x .list table .m-goodsPrice {
		color: #333;
		display: block;
	}

	.cart-x .list table .mar-goodsPrice {
		color: #999;
		display: block;
	}

	.cart-x .list table .myh-goodsPrice {
		display: inline-block;
		margin-top: 5px;
		border: 1px solid #C90;
		padding: 3px 8px;
		color: #C90;
		background: #fff;
		border-radius: 3px;
	}

	.cart-x .list table .kcbz td.td01 .pic img {
		-webkit-filter: grayscale(100%);
		-moz-filter: grayscale(100%);
		-ms-filter: grayscale(100%);
		-o-filter: grayscale(100%);
		filter: grayscale(100%);
		filter: gray;
	}

	.cart-x .list table .kcbz td.td01 .name a {
		color: #939393;
	}

	.cart-x .list table .kcbz td.td01 .size {
		color: #939393;
	}

	.cart-x .list table .kcbz .m-goodsPrice {
		color: #939393;
	}

	.cart-x .list table .kcbz td {
		color: #939393;
	}

	.cart-x .list table .kcbz .td04 .m-goodsPrice {
		color: #939393;
	}

	.cart-x .list table .kcbz .td05 .del {
		color: #939393;
	}



	.u-yen {
		font-family: Arial;
		padding: 0 2px;
	}

	.u-pric {
		font-family: Arial;
		font-size: 14px;
	}

	.quantity {
		position: relative;
		padding: 0 23px;
		width: 28px;
		height: 22px;
		border: 1px solid #e3e2e2;
		border-radius: 2px;
		margin: 0 auto;
		box-shadow: 0 0px 1px #dfdfdf;
	}

	.quantity .l-no {
		display: none;
		position: absolute;
		top: 0;
		width: 22px;
		height: 22px;
		left: 0;
		border-right: 1px solid #e3e2e2;
		font-weight: bold;
		font-size: 18px;
		line-height: 20px;
		color: #e7e6e6;
	}

	.quantity .l-y {
		position: absolute;
		top: 0;
		width: 22px;
		height: 22px;
		left: 0;
		border-right: 1px solid #e3e2e2;
		font-weight: bold;
		font-size: 18px;
		line-height: 20px;
		color: #aaa;
	}

	.quantity .l-y:hover {
		color: #666;
	}

	.quantity .r-no {
		display: none;
		position: absolute;
		top: 0;
		width: 22px;
		height: 22px;
		right: 0;
		border-left: 1px solid #e3e2e2;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #e7e6e6;
	}

	.quantity .r-y {
		position: absolute;
		top: 0;
		width: 22px;
		height: 22px;
		right: 0;
		border-left: 1px solid #e3e2e2;
		font-weight: bold;
		font-size: 16px;
		line-height: 20px;
		color: #aaa;
	}

	.quantity .r-y:hover {
		color: #666;
	}

	.quantity input.tip {
		width: 28px;
		border: none;
		height: 22px;
		line-height: 22px;
		text-align: center;
	}

	.cart-x .list table .td04 .m-goodsPrice {
		color: #f52648;
		font-family: Arial;
		font-size: 14px;
	}

	.quantity .cart-error {
		margin: 6px 0 0;
		white-space: nowrap;
		padding: 0 8px;
		color: #f00;
		line-height: 23px;
		margin-left: -35px;
	}

	.cart-x .list table .td05 .del {
		text-align: center;
		color: #464646;
	}

	.cart-x .list table .td05 .del:hover {
		text-decoration: underline;
	}

	.orders {
		background: #f9f9f9;
		border: 1px solid #e3e2e2;
		border-top: none;
		padding: 10px 0
	}

	.orders p {
		height: 24px;
		line-height: 24px;
		margin: 5px 15px;
		font-size: 14px;
		font-family: "\5FAE\8F6F\96C5\9ED1";
		color: #9f9f9f;
	}

	.orders span {
		background: #999999;
		padding: 0px 15px;
		margin-right: 15px;
		height: 24px;
		display: inline-block;
		color: #fff;
	}

	.orders span.u-m {
		background: #f3b241;
	}

	.orders span.u-y {
		background: #ffa4b2;
	}



	.list-orders {
		border-top: none;
		margin-bottom: 5px;
		width: 98%;
		margin: 0 auto;
	}

	.list-orders p {
		height: 24px;
		line-height: 24px;
		font-size: 14px;
		font-family: "\5FAE\8F6F\96C5\9ED1";
		color: #9f9f9f;
		border-bottom: 1px dashed #cdcdcd;
		padding-bottom: 10px;
		margin-top: 10px
	}

	.list-orders p em {
		color: #F00;
	}

	.list-orders p a {
		color: #1c95d3;
	}

	.list-orders span {
		background: #D84C4C;
		padding: 0px 15px;
		margin-right: 15px;
		height: 24px;
		display: inline-block;
		color: #fff;
	}

	.list-orders span.u-m {
		background: #f3b241;
	}

	.list-orders span.u-y {
		background: #ffa4b2;
	}

	.table-box-tip {
		padding-top: 10px;
	}

	.cart-j {
		position: relative;
		border: 1px solid #ecebeb;
		z-index: 3;
		/* margin: 20px 0; */
		overflow: hidden;
		background: #fdfcf8;
	}


	.cart-m-b .main table td a.sy {
		width: 50%;
		height: 27px;
		line-height: 27px;
		display: inline-block;
		background: #f52648;
		color: #fff;
		border: 1px solid #f52648;
	}

	.cart-m-b .main table td a.qxsy {
		width: 50%;
		height: 27px;
		line-height: 27px;
		display: inline-block;
		background: #fff;
		color: #f52648;
		border: 1px solid #f52648;
	}

	.cart-m-b .main table td a.qcd {
		font-weight: bold;
		text-decoration: underline;
		color: #f52648;
	}

	.cart-m-b .main table td b {
		font-weight: bold;
		color: #f52648;
		/* margin: 0 5px; */
	}

	.cart-m-b .main table td a.ysy {
		width: 50%;
		height: 27px;
		line-height: 27px;
		display: inline-block;
		background: #f7f9fa;
		color: #c8c8c8;
		border: 1px solid #d7d7d7;
	}

	.cart-m-b .main table td a.ygq {
		width: 50%;
		height: 27px;
		line-height: 27px;
		display: inline-block;
		background: #f7f9fa;
		color: #c8c8c8;
		border: 1px solid #d7d7d7;
	}

	.cart-m-b .main table td a.bky {
		width: 78px;
		height: 27px;
		line-height: 27px;
		display: inline-block;
		background: #f7f9fa;
		color: #c8c8c8;
		border: 1px solid #d7d7d7;
	}

	.cart-j .juan {
		position: absolute;
		/* left: 480px;
		top: 40px; */
	}

	.cart-m-b .main .yes {}

	.cart-m-b .main .no {
		color: #c8c8c8;
	}

	.cart-m-b .main {}

	.cart-b {
		width: 100%;
		overflow: hidden;
		color: #525252;
		position: relative;
	}

	.cart-b p {
		position: absolute;
		top: 25px;
		left: 10px;
		height: 29px;
		line-height: 29px;
	}

	.cart-b ul {
		width: 60%;
		float: right;
	}

	.cart-b ul li {
		height: 40px;
		line-height: 38px;
		overflow: hidden;
	}

	.fl {
		width:50%;
		float: left;
	}

	.fr {
		width:50%;
		float: right;
	}

	.cart-b ul li b {
		color: #f52648;
	}

	.cart-b ul li .u-yen {
		color: #f52648;
		font-size: 14px;
		font-weight: normal;
	}

	.cart-b ul li .u-goodsPrice {
		color: #f52648;
		font-size: 20px;
		font-weight: normal;
	}

	.cart-b ul li.ov-pre .u-yen {
		color: #f52648;
		font-size: 16px;
		font-weight: bold;
	}

	.cart-b ul li.ov-pre .u-goodsPrice {
		color: #f52648;
		font-size: 22px;
		font-weight: bold;
	}

	.cart-bt {
		background: #fff;
		border-top: 1px solid #dfdfdf;
	}

	.cart-bt ul li {
		height: 78px;
		line-height: 78px;
	}

	.cart-js {
		height: 48px;
		background: #f3f3f3;
		border-top: 1px solid #ecebeb;
		line-height: 48px;
		font-size: 14px;
		font-family: "\5FAE\8F6F\96C5\9ED1";
		position: relative;
	}

	.cart-js .fl {
		margin-left: 25px;
		z-index: 6;
		position: absolute;
	}

	.cart-js .fl a {
		margin: 0px 10px;
	}

	.cart-js .fr span {
		/* margin-right: 50px; */
	}

	.cart-js .fr span b {
		color: #f52648;
	}

	.cart-js .fr input.pre {
		width: 100%;
		height: 48px;
		float: right;
		cursor: pointer;
		background: #f52648;
		border: none;
		color: #fff;
		font-size: 16px;
		font-family: "\5FAE\8F6F\96C5\9ED1";
	}

	.cart-js .fr input.txsp {
		background: #f52648;
		border: none;
		padding: 4px 7px;
		color: #fff;
		margin-left: 15px;
	}

	.cart-js .fr input.pre-h {
		width: 100%;
		height: 48px;
		float: right;
		cursor: pointer;
		background: #cacaca;
		border: none;
		color: #fff;
		font-size: 16px;
		font-family: "\5FAE\8F6F\96C5\9ED1";
	}

	#cart_list_temp {
		position: relative;
	}

	#cart_list_temp>input {
		position: absolute;
		left: -30px;
		top: 50%;
	}


	.cart-jscs {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 150;
	}

	.cart-jscs i {
		background: #000;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		display: block;
		filter: alpha(opacity=50);
		-moz-opacity: 0.5;
		-khtml-opacity: 0.5;
		opacity: 0.5;
	}

	.cart-jscs .box {
		width: 80%;
		height: 224px;
		position: fixed;
		left: 10%;
		top: 10%;
		background: #fafafa;
	}

	.cart-jscs .box .tit {
		height: 40px;
		background: url(./../../static/images/delete.jpg) no-repeat 0 0 #f62648;
		color: #fff;
		padding-left: 20px;
		line-height: 40px;
		font-size: 14px;
		font-weight: bold;
	}

	.cart-jscs .box .tit span {
		width: 40px;
		height: 40px;
		display: inline-block;
		float: right;
		background: url(./../../static/images/delete.jpg) no-repeat 0 -40px #f62648;
		margin-right: 10px;
		cursor: pointer;
	}

	.cart-jscs .box p {
		text-align: center;
		font-size: 14px;
		/* margin-top: 50px; */
		color: #464646;
		line-height: 1.8;
	}

	.cart-jscs .box .but {
		position: absolute;
		text-align: center;
		width: 100%;
		bottom: 25px;
	}

	.cart-jscs .box .over {
		height: 32px;
		width: 100px;
		display: inline-block;
		line-height: 32px;
		background: #f62648;
		border: 1px solid #f62648;
		color: #fff;
		cursor: pointer;
	}

	.cart-jscs .box .hy {
		height: 32px;
		width: 100px;
		background: #fff;
		border: 1px solid #CBCBCB;
		cursor: pointer;
	}
</style>
