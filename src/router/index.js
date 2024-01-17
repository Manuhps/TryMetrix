import { createRouter, createWebHistory } from 'vue-router';
import RankingListView from '../views/RankingListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../components/LandingPage.vue'),
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue'),
    },
    {
      path: '/game/:id',
      name: 'game',
      component: () => import('../components/Game.vue'),
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: RankingListView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegistrationView.vue'),
    },
  ],
});

export default router;

