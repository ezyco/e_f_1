import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/components/MenuPage.vue';
import NotFoundPage from '@/components/NotFoundPage.vue'
const routes = [
  {
    path: '/menu/toptime',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/:pathMatch(.*)*',
    name:'Not Found',
    component: NotFoundPage,
  },
  
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;
