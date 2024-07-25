import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/components/MenuPage.vue';
import ServerPage from '@/components/ServerPage.vue';

const routes = [
  {
    path: '/',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/server',
    name: 'ServerPage',
    component: ServerPage
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;