import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/home/index';
import DetailPage from '../pages/detail/index';
import DetailAnaPage from '../pages/detail/analysis.vue';
import DetailCouPage from '../pages/detail/count.vue';
import DetailForPage from '../pages/detail/forecast.vue';
import DetailPubPage from '../pages/detail/publish.vue';
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
     /* redirect: '/detail/analysis',*/
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
