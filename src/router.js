import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import SocialCare from './views/SocialCare.vue';
import MentalHealth from './views/MentalHealth.vue';
import Profile from './views/Profile.vue';

import CORS from 'cors'

Vue.use(Router);

CORS(app)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
    },
    {
      path: '/socialcare',
      name: 'socialcare',
      component: () => import(/* webpackChunkName: "about" */ './views/SocialCare.vue'),
    },
    {
      path: '/mentalhealth',
      name: 'mentalhealth',
      component: () => import(/* webpackChunkName: "about" */ './views/MentalHealth.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue'),
    },
  ],
});
