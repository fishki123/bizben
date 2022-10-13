import Home from "@/components/Home/Home";
import {createRouter, createWebHistory} from "vue-router";
import About from "@/components/About/About";
import Account from "@/components/AccountPage/Account";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Account',
        component: Account
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;