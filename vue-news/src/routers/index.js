import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',//url에 붙어있던 해시를 없애준다.
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      component: NewsView
    },
    {
      path: '/ask',
      component: AskView
    },
    {
      path: '/jobs',
      component: JobsView
    }
  ]
});