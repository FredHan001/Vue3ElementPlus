import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tagsmgmt',
    name: 'Tagsmgmt',
    component: () => import(/* webpackChunkName: "tagsmgmt" */ '../views/ProductMgmt/TagsMgmt.vue'),
    meta:{
      breadcrumb:["ProductMgmt","TagsMgmt"]
    }
  },
  {
    path: '/threadsync',
    name: 'Threadsync',
    component: () => import(/* webpackChunkName: "threadsync" */ '../views/ProductMgmt/ThreadSync.vue'),
    meta:{
      breadcrumb:["ProductMgmt","ThreadSync"]
    }
  },
  {
    path: '/membermgmt',
    name: 'Membermgmt',
    component: () => import(/* webpackChunkName: "membermgmt" */ '../views/MemberMgmt/index.vue')
  },
  {
    path: '/permissionmgmt',
    name: 'Permissionmgmt',
    component: () => import(/* webpackChunkName: "permissionmgmt" */ '../views/PermissionMgmt/index.vue')
  },
  {
    path: '/icm',
    name: 'Exceptionmgmt',
    component: () => import(/* webpackChunkName: "exceptionmgmt" */ '../views/ExceptionMgmt/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
