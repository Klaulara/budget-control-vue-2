import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BudgetView from '../views/BudgetView.vue'
import CategoryView from '../views/CategoryView.vue'
import ExpensesView from '../views/ExpensesView.vue'
import EditCategoryView from '../views/EditCategoryView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/budget',
    name: 'budget',
    component: BudgetView
  },
  {
    path: '/budget/:id',
    name: 'expenses',
    component: ExpensesView
  },
  {
    path: '/category',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/category/:id',
    name: 'editCategory',
    component: EditCategoryView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
