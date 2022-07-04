import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../components/AppHome.vue'
import NotFound from '../components/NotFound'

import { getCurrentUser } from '@/firebaseDb'

const routes = [
    {
        path: '/guide',
        name: 'guide',
        component: () => import('../views/guideApp.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginRegister.vue'),
    },
    {
        path: '/',
        name: 'AppHome',
        component: AppHome,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },

    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../components/Profile.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('../components/ForgotPassword.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    if (requiresAuth && !(await getCurrentUser())) {
        next('/login')
    } else {
        next()
    }
})

export default router
