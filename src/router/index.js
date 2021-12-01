import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home")
const Category = () => import("../views/category/Category")
const Profile = () => import("../views/profile/Profile")
const Shopcart = () => import("../views/shopcart/Shopcart")
const Detail = () => import("../views/detail/Detail")
Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/home',
       
    },
    {
        path: '/home',
        component: Home,
        meta: {
            showTab: true
        }
    },
    {
        path: '/category',
        component: Category,
        meta: {
            showTab: true
        }
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            showTab: true
        }
    },
    {
        path: '/shopcart',
        component: Shopcart,
        meta: {
            showTab: true
        }
    },
    {
        path: '/detail:id',
        component: Detail,
        meta: {
            showTab: false
        }
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
