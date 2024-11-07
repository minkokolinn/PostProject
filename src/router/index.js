import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '@/views/DetailView.vue'
import CreateView from '@/views/CreateView.vue'
import TagsView from '@/views/TagsView.vue'
import TestView from '@/views/TestView.vue'
import RealTimeView from '@/views/RealTimeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'DetailView',
    component: DetailView,
    props: true
  },
  {
    path: '/create',
    name: 'CreateView',
    component: CreateView
  },
  {
    path: '/tags/:tag',
    name: 'TagsView',
    component: TagsView,
    props:true
  },
  {
    path: '/test',
    name: 'TestView',
    component: TestView
  },
  {
    path: '/realtime',
    name: 'RealTimeView',
    component: RealTimeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
