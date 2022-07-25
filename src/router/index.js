import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '@/layout'

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
      path: '/:all(.*)*',
      name: 'notFound',
      component: () => import('@/views/[...all].vue'),
      meta: {
          title: '找不到页面'
      }
  }
]

// 系统路由
let routes = [
  {
      path: '/',
      component: Layout,
      meta: {
          title: () => {
              return '首页'
          },
          breadcrumb: false
      },
      redirect: '/dashboard',
      children: [
          {
              path: '',
              name: 'dashboard',
              component: () => import('@/views/index.vue'),
              meta: {
                  title: () => {
                      return '首页'
                  },
                  breadcrumb: false
              }
          }
      ]
  },
  {
      path: '/personal',
      component: Layout,
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
                  cache: 'personalEditPassword'
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
  {
      path: '/reload',
      component: Layout,
      meta: {
          title: '重新加载',
          breadcrumb: false
      },
      children: [
          {
              path: '',
              name: 'reload',
              component: () => import('@/views/reload.vue'),
              meta: {
                  title: '重新加载',
                  breadcrumb: false
              }
          }
      ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
