import { createWebHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import ContactUs from './views/ContactUs.vue'
import Tech from './views/Tech.vue'

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
        name: 'Videos',
        path: '/videos',
        component:Tech
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router