import Vue from 'vue'
//import { createRouter, createWebHistory } from 'vue-router'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Calculator from '../views/Calculator.vue'
import Diary from '../views/Diary.vue'
import MyDiary from '../views/MyDiary.vue'
import Fitness from '../views/Fitness.vue'
import Nutrition from '../views/Nutrition.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Search from '../views/Search.vue'
import Searc from '../views/Searc.vue'

Search
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator,
    },

    {
      path: '/diary',
      name: 'Diary',
      component: Diary
    }
    ,
    {
      path: '/mydiary',
      name: 'MyDiary',
      component: MyDiary
    }
    ,

    {
      path: '/fitness',
      name: 'Fitness',
      component: Fitness
    }
    ,

    {
      path: '/nutrition',
      name: 'Nutrition',
      component: Nutrition
    }
    ,

    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,

    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp
    }
    ,

    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Searc',
      name: 'Searc',
      component: Searc
    }
  ]


})

