import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/upload',
            name: 'upload',
            // route level code-splitting
            // this generates a separate chunk (upload.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/UploadView.vue')
        },
        {
            path: '/article/:id',
            name: 'article',
            component: () => import("../views/ArticleView.vue")
        },
        {
            path: '/'
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
