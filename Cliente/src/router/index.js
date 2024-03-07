import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Login from "../components/Login/Login.vue"
import Editor from "../components/Login/Editor.vue"
import Viewer from "../components/Login/Viewer.vue"
import Admin from "../components/Login/Admin.vue"
import Unauthorized from "../components/Login/Unauthorized.vue"
import NotFound from "../components/Login/NotFound.vue"
import { jwtDecode } from 'jwt-decode';

const routes = [
    {
      path: '/',
      name: '/login',
    },
    {
      name: 'login',
      path: "/login",
      component: Login
    },
    {
      name: "admin",
      path: "/admin",
      component: Admin,
      meta: {role: 'admin'}
    },
    {
      name: "viewer",
      path: "/viewer",
      component: Viewer,
      meta: {role: 'viewer'}
    },
    {
      name: "editor",
      path: "/editor",
      component: Editor,
      meta: {role: 'editor'}
    },
    {
      name: "unauthorized",
      path: "/unauthorized",
      component: Unauthorized,
    },
    {
      name: "NotFound",
      path: "/:catchAll(.*)",
      component: NotFound,
    },
  ]

const router = new VueRouter({
  routes
})

router.beforeEach ((to, from, next) => {
  const publicPages = ['/login','/', '/unauthorized'];
  //Se añade rutas que consideren publicas
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('token');

  if(authRequired && !loggedIn){
    return next('/login');
  }

  if(loggedIn){
    const decoded = jwtDecode(loggedIn);
    const role = decoded.role;
    if(to.meta.role && to.meta.role !== role){
      return next('/unauthorized');
    }
  }

  next();
});

export default router;
