import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/home/index';
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/login',
      component: IndexPage
    },
    {
      path: '/register',
      component: IndexPage
    },
  ]
})
