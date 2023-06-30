import { createRouter, createWebHistory } from 'vue-router'
// import HeaderMain from '../components/HeaderMain.vue'
import MainPage from '../components/pages/MainPage.vue'
import TasksPage from '../components/pages/TasksPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: MainPage,
      alias:'/'
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: TasksPage
    }
  ]
})

export default router
