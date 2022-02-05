import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path:'/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from,next)=>{
  document.title = `${process.env.VUE_APP_TITLE}  -  ${to.name} `
  next()
})

export default router
