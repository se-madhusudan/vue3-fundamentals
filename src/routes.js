import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import ContactUs from './views/ContactUs.vue'
import Quotes from './views/Quotes.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component:Home
    },
    {
        name: 'AboutUs',
        path: '/about',
        component:AboutUs
    },
    {
        name: 'ContactUs',
        path: '/contact',
        component:ContactUs
    },
    {
        name: 'Quotes',
        path: '/quotes',
        component:Quotes
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router