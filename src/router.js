import Vue from 'vue'
import Router from 'vue-router'
import Seek from './views/seek.vue'
import Move from './views/move.vue'
import Moveth from './views/movie-theatre.vue'
import My from './views/my.vue'
import City from './views/city.vue'
import Hoting from './views/move/hot-broadcast'
import Upcoming from './views/move/upcoming'
import Detail from './views/details'
import Login from './views/login'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/move',
      name: 'move',
      component: Move,
      children: [
        {
          path: 'hoting',
          component: Hoting
        },
        {
          path: 'upcoming',
          component: Upcoming
        },
        {
          path: '',
          redirect: '/move/hoting'
        }

      ]
    },
    {
      path: '/moveth',
      name: 'moveth',
      component: Moveth
    },
    {
      path: '/myself',
      name: 'myself',
      component: My
    },
    {
      path: '/seek',
      name: 'seek',
      component: Seek
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/move'
    },

    // 动态路由添加
    {
      path: '/detail/:myid',
      name: 'detail',
      component: Detail
    }

  ]
})
const isLogin = () => {
  return false
}
// 全局守卫 -- 导航守卫  路由拦截
router.beforeEach((to, from, next) => {
  if (to.path === '/myself') {
    // 路由拦截
    if (isLogin()) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
export default router
