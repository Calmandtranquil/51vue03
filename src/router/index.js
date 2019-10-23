import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../components/Index.vue'
import Next from '../components/Next.vue'
import Then from '../components/Then.vue'
import Finally from '../components/Finally.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
    {
        name:'Index',
        path:'/',
        component:Index
    },
    {
        name:'Next',
        path:'/Next',
        component:Next
    },
    {
        name:'Then',
        path:'/Then',
        component:Then
    },
    {
        name:'Finally',
        path:'/Finally',
        component:Finally
    }
]

const router = new VueRouter({
  routes
})

export default router
