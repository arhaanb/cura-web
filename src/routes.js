import Home from './views/Home.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('./views/Register.vue'),
  },
  {
    path: '/*',
    name: '404',
    component: () => import('./views/404.vue'),
  },
]
