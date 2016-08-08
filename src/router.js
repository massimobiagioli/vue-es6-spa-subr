import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './components/dashboard.vue'
import Home from './components/home.vue'
import DashboardDefault from './components/dashboard-default.vue'
import About from './components/about.vue'
import Contact from './components/contact.vue'
import store from './store'

Vue.use(VueRouter);

const router = new VueRouter();

router.map({
  '/': {
    component: Dashboard,
    subRoutes: {
      '/': {
        component: DashboardDefault
      },
      '/home': {
        component: Home
      },
      '/about': {
        component: About
      },
      '/contact': {
        component: Contact
      }
    }
  }
});

export default router