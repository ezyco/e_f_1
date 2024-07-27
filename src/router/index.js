import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/components/MenuPage.vue';
import ServerPage from '@/components/ServerPage.vue';
import EditMenuPage from '@/components/EditMenuPage.vue';
import SettingsPage from '@/components/SettingsPage.vue';
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
  {
    path: '/edit',
    name: 'EditMenuPage',
    component: EditMenuPage
  },
  {
    path: '/settings',
    name: 'SettingsPage',
    component: SettingsPage
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  });

export default router;