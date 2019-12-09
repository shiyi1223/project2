// 引入vue
import Vue from 'vue'

// 先安装vuex   命令：npm install vuex --save
// 引入vuex
import Vuex from 'vuex'

// 安装vuex插件
Vue.use(Vuex)

export default new Vuex.Store({
	state:{
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
		lists1: [{
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
		lists2:[
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
		lists3:[
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
		addCart:[],
		
	},
	getters:{},
	mutations:{
		addlist(state,payload){
			if(state.lists[payload]){
				state.addCart.push(state.lists[payload])
			}else if(state.lists1[payload]){
				state.addCart.push(state.lists1[payload])
			}else if(state.lists2[payload]){
				state.addCart.push(state.lists2[payload])
			}else{
				state.addCart.push(state.lists3[payload])
			}	
			console.log(state.addCart)
		}
	},
	actions:{}
	})