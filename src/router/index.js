// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SingleView from '@/views/SingleView.vue'
import AboutView from '@/views/AboutView.vue'
import ProgrammationView from '@/views/ProgrammationView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/apropos',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/programmation',
      name: 'programmation',
      component: ProgrammationView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/events/:documentId',
      name: 'event-single',
      component: SingleView,
      props: true,
    },
  ],
})

export default router
