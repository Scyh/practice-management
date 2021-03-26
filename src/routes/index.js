import { createRouter, createWebHistory } from 'vue-router';
import { BasicView } from '../layout'
import Home from '../view/Home.vue';

// 基础路由
const baseRouter = {
  path: '/',
  component: BasicView,
  children: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/summary/:article',
      component: () => import('@/view/Summary/index')
    }
  ]
}

const routes = [ baseRouter ]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router