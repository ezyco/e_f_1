import { createRouter, createWebHistory } from 'vue-router';
import MenuPage from '@/components/MenuPage.vue';
import ServerPage from '@/components/ServerPage.vue';
import EditMenuPage from '@/components/EditMenuPage.vue';
import SettingsPage from '@/components/SettingsPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import ProfilePage from '@/components/ProfilePage.vue';
import NotFoundPage from '@/components/NotFoundPage.vue'
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
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
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