import VueRouter from 'vue-router'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage'
import FormPage from './views/FormPage'

const routes = [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: "/login",
        component: LoginPage
    },
    {
        path: "/form",
        component: FormPage
    },
]

const router = new VueRouter({
    routes
})

export default router;