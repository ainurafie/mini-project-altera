import VueRouter from 'vue-router'
import LandingPage from './views/LandingPage'
import LoginPage from './views/LoginPage'
import FormPage from './views/FormPage'
import HistoryPage from './views/HistoryPage'

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
    {
        path: "/history",
        component: HistoryPage
    }
]

const router = new VueRouter({
    routes
})

export default router;