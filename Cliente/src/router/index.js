import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/summary',
      component: () => import('../components/Summary.vue'),
      children: [
        {
          path: '/summary',
          name: 'summary',
          component: () => import('../components/Resumen.vue')
        },
        {
          path: '/form',
          name: 'form',
          component: () => import('../components/Formulario.vue')
        },
        {
          path: '/content',
          name: 'content',
          component: () => import('../components/Paginacion.vue')
        }
      ]
    }
  ]
})

//const router = new VueRouter({routes,})
export default router
