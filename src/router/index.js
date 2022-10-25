// Requiring module
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddReminder from '../views/AddReminder.vue'
import RemindersList from '../views/RemindersList.vue'
import AboutView from '../views/AboutView.vue'
import ViewReminderVue from '@/views/ViewReminder.vue'
import UpdateReminderVue from '@/views/UpdateReminder.vue'
import SignUpVue from '@/views/SignUp.vue'
import SignInVue from '@/views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  }, 
  {
    path: '/ViewReminder/:id',
    name: 'view-reminder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ViewReminderVue
  },
  {
    path: '/UpdateReminder/:id',
    name: 'update-reminder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UpdateReminderVue
  },
  {
    path: '/AddReminder',
    name: 'add-reminder',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddReminder,
    meta:{
      authRequired: true
    }
  },
  {
    path: '/RemindersList',
    name: 'reminders-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RemindersList,
    meta:{
      authRequired: true
    }
  },
  {
    path: '/SignUp',
    name: 'sign-up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignUpVue
  },
  {
    path: '/SignIn',
    name: 'sign-in',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignInVue
  }
]

// Create Vue Router Object
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.authRequired){
    if(localStorage.getItem("token")){
      next()
    }else{
      router.push({
        name: "sign-in"
      })
    }
  }
  else{
    next()
  }
})

export default router
