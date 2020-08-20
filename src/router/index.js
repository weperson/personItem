import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/welcome',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/group',
    component: Layout,
    redirect: '/group/index',
    children: [{
      path: 'index',
      name: '集团网站',
      component: () => import('@/views/group/index'),
      meta: { title: '集团网站', icon: 'dashboard', affix: false }
    }],
    hidden: true
  },
  {
    path: '/emailMes',
    component: Layout,
    redirect: '/emailMes/index',
    children: [{
      path: 'index',
      name: '邮箱申请详情',
      component: () => import('@/views/emailMes/index'),
      meta: { title: '邮箱申请详情', icon: 'dashboard', affix: false }
    }],
    hidden: true
  },
  {
    path: '/iHaierMes',
    component: Layout,
    redirect: '/iHaierMes/index',
    children: [{
      path: 'index',
      name: 'ihaier详情',
      component: () => import('@/views/iHaierMes/index'),
      meta: { title: 'ihaier详情', icon: 'dashboard', affix: false }
    }, {
      path: 'iHaierDown',
      name: 'ihaier下载',
      component: () => import('@/views/iHaierMes/iHaierDown'),
      meta: { title: 'ihaier下载', icon: 'dashboard', affix: false }
    }, {
      path: 'jieban',
      name: '捷办下载',
      component: () => import('@/views/iHaierMes/jieban'),
      meta: { title: '捷办下载', icon: 'dashboard', affix: false }
    }],
    hidden: true
  },
  {
    path: '/vpn',
    component: Layout,
    redirect: '/vpn/index',
    children: [{
      path: 'index',
      name: 'vpn操作指南',
      component: () => import('@/views/vpn/index'),
      meta: { title: 'vpn操作指南', icon: 'dashboard', affix: true }
    }],
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    }]
  },

  {
    path: '/RZBG',
    component: Layout,
    redirect: '/RZBG/BGYP',
    name: '入职办公',
    meta: { title: '入职办公', icon: 'el-icon-s-help' },
    // hidden: true,
    children: [
      {
        path: 'BGYP',
        name: '办公用品',
        component: () => import('@/views/table/index'),
        meta: { title: '办公用品', icon: 'table' }
      },
      {
        path: 'GHSF',
        name: '工号身份',
        component: () => import('@/views/tree/index'),
        meta: { title: '工号身份', icon: 'tree' }
      },
      {
        path: 'JCDK',
        name: '进出打卡',
        component: () => import('@/views/tree/index'),
        meta: { title: '进出打卡', icon: 'tree' }
      },
      {
        path: 'BGLL',
        name: '办公联络',
        component: () => import('@/views/tree/index'),
        meta: { title: '办公联络', icon: 'tree' }
      },
      {
        path: 'RJXZ',
        name: '软件下载',
        component: () => import('@/views/tree/index'),
        meta: { title: '软件下载', icon: 'tree' }
      }
    ]
  },

  {
    path: '/company',
    component: Layout,
    // hidden: true,
    redirect: '/company/index',
    name: '公司',
    meta: {
      title: '公司',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: '公司简介',
        component: () => import('@/views/form/index'),
        meta: { title: '公司简介', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    // hidden: true,
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ],
    hidden: true
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
