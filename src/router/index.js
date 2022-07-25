import { createRouter, createWebHashHistory } from "vue-router";
import useRouteStore from '@/store/modules/route'

import { constantRoutes, dynamicRoutes } from './routes'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [...constantRoutes, ...dynamicRoutes],
});

const isLogin = true;

router.beforeEach(async (to, from, next) => {
	const routeStore = useRouteStore()
	if (isLogin) {
		if (routeStore.isGenerate) {
			if (to.name) {
				if (to.matched.length !== 0) {
					// 如果已登录状态下，进入登录页会强制跳转到控制台页面
					if (to.name == 'login') {
						next({
							name: 'dashboard',
							replace: true
						})
					} else if (to.name == 'dashboard') {
						// 如果未开启控制台页面，则默认进入侧边栏导航第一个模块
						// if (menuStore.sidebarMenus.length > 0) {
						//     next({
						//         path: menuStore.sidebarMenusFirstDeepestPath,
						//         replace: true
						//     })
						// } else {
						//     next()
						// }
						next()
					} else {
						next()
					}
				} else {
					// 如果是通过 name 跳转，并且 name 对应的路由没有权限时，需要做这步处理，手动指向到 404 页面
					next({
						path: '/404'
					})
				}
			} else {
				next()
			}
		} else {
			let removeRoutes = []
			routeStore.flatRoutes.forEach(route => {
				if (!/^(https?:|mailto:|tel:)/.test(route.path)) {
					removeRoutes.push(router.addRoute(route))
				}
			})

			// 记录的 accessRoutes 路由数据，在登出时会使用到，不使用 router.removeRoute 是考虑配置的路由可能不一定有设置 name ，则通过调用 router.addRoute() 返回的回调进行删除
			routeStore.setCurrentRemoveRoutes(removeRoutes)
			next({
				path: to.fullPath,
				query: to.query,
				replace: true
			})
		}



	} else {
		if (to.name != 'login') {
			next({
				name: 'login',
				query: {
					redirect: to.fullPath
				}
			})
		} else {
			next()
		}
	}
})

export default router;
