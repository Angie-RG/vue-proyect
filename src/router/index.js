import {createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            meta: {
                title: 'Home'
            },
            component: () => import('../components/HelloWorld.vue')
        }
    ],
});

export default router;