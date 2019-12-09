import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import home from '@/components/home'
import my from '@/components/my'
import views from '@/components/views'
import service from '@/components/service'
import transaction from '@/components/transaction'
import leave from '@/components/leave'
import interaction from '@/components/interaction'
import book from '@/components/book'
import furniture from '@/components/furniture'
import electronic from '@/components/electronic'
import detail from '@/components/detail'
import explicit from '@/components/explicit'
import minute from '@/components/minute'
import circumstantial from '@/components/circumstantial'
import login from '@/components/login'
import loginType1 from '@/components/loginType1'
import loginType2 from '@/components/loginType2'
import group from '@/components/group'
import shop from '@/components/shop'
Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
		   path: '/',//  /默认为根路径
		   name: 'home',
		   component: home,
		}, 
		{
			path:'/book',
			name:'book',
			component:book
		},
		{
			path:'/furniture',
			name:'furniture',
			component:furniture	   
		},
		{
			path:'/electronic',
			name:'electronic',
			component:electronic	   
		}, 
		{
			path:'/service',
			name:'service',
			component:service
		},
		{
			path:'/views',
			name:'views',
			component:views,
		},
		{
			path:'/my',
			name:'my',
			component:my
		},
		{
			path:'/transaction',
			name:'transaction',
			component:transaction
		},
		{
			path:'/leave',
			name:'leave',
			component:leave
		},
		{
			path:'/interaction',
			name:'interaction',
			component:interaction
		},
		{
			path:'/detail/:id',
			name:'detail',
			component:detail
		},
		{
			path:'/explicit/:id',
			name:'explicit',
			component:explicit
		},
		{
			path:'/minute/:id',
			name:'minute',
			component:minute
		},   
		{
			path:'/group/:id',
			name:'group',
			component:group
		},
		{
		 	path:'/circumstantial/:id',
		 	name:'circumstantial',
		 	component:circumstantial
		},
		{
		 	path:'/login',
		 	name:'login',
		 	component:login,
			children:[
				{
					path:'/',
					name:'loginType1',
					component:loginType1,
				},
				{
					path:'loginType2',
					name:'loginType2',
					component:loginType2,
				}
			]
		},
		{
			path:'/shop',
			name:'shop',
			component:shop,
		}
	]
})
