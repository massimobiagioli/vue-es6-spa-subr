import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from './dashboard.vue'
import Home from './home.vue'
import DashboardDefault from './dashboard-default.vue'
import About from './about.vue'
import Contact from './contact.vue'

Vue.use(VueRouter);

let router = new VueRouter();

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

let App = Vue.extend({});

router.start(App, '#app');