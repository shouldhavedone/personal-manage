// 固定路由（默认路由）
let constantRoutes = [
	{
		path: '/',
		redirect: '/dashboard'
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue'),
		meta: {
			title: '登录'
		}
	},
	{
		path: '/dashboard',
		component: () => import('@/layout'),
		meta: {
			breadcrumb: false
		},
		children: [
			{
				path: '',
				name: 'dashboard',
				component: () => import('@/views/index.vue'),
				meta: {
					breadcrumb: false
				}
			}
		]
	},

]

// // 系统路由
// let systemRoutes = [
// 	{
// 		path: '/dashboard',
// 		component: () => import('@/layout'),
// 		meta: {
// 			breadcrumb: false
// 		},
// 		children: [
// 			{
// 				path: '',
// 				name: 'dashboard',
// 				component: () => import('@/views/index.vue'),
// 				meta: {
// 					breadcrumb: false
// 				}
// 			}
// 		]
// 	},
// 	{
// 		path: '/personal',
// 		component: () => import('@/layout'),
// 		redirect: '/personal/setting',
// 		meta: {
// 			title: '个人中心',
// 			breadcrumb: false
// 		},
// 		children: [
// 			{
// 				path: 'setting',
// 				name: 'personalSetting',
// 				component: () => import('@/views/personal/setting.vue'),
// 				meta: {
// 					title: '个人设置',
// 					cache: 'personalEditPassword'
// 				}
// 			},
// 			{
// 				path: 'edit/password',
// 				name: 'personalEditPassword',
// 				component: () => import('@/views/personal/editPassword.vue'),
// 				meta: {
// 					title: '修改密码',
// 				}
// 			}
// 		]
// 	},
// 	{
// 		path: '/reload',
// 		component: () => import('@/layout'),
// 		meta: {
// 			title: '重新加载',
// 			breadcrumb: false
// 		},
// 		children: [
// 			{
// 				path: '',
// 				name: 'reload',
// 				component: () => import('@/views/reload.vue'),
// 				meta: {
// 					title: '重新加载',
// 					breadcrumb: false
// 				}
// 			}
// 		]
// 	}
// ]

let dynamicRoutes = [
	{
		path: '/personal',
		name: 'personal',
		component: () => import('@/layout'),
		redirect: '/personal/setting',
		meta: {
			title: '个人中心',
			breadcrumb: false
		},
		children: [
			{
				path: 'setting',
				name: 'personalSetting',
				component: () => import('@/views/personal/setting.vue'),
				meta: {
					title: '个人设置',
				}
			},
			{
				path: 'edit/password',
				name: 'personalEditPassword',
				component: () => import('@/views/personal/editPassword.vue'),
				meta: {
					title: '修改密码',
				}
			}
		]
	},
]

export {
	constantRoutes,
	// systemRoutes,
	dynamicRoutes,
}
