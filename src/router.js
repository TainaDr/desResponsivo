import { createRouter, createWebHistory } from 'vue-router';

// const MenuPrincipal = () => import('@/components/MenuPrincipal.vue');
const OutroComponente = () => import('@/components/OutroComponente.vue');
const ImagensDiversas = () => import('@/components/ImagensDiversas.vue');
const VideoUnico = () => import('@/components/VideoUnico.vue');
const TabelaDiversos = () => import('@/components/TabelaDiversos.vue');

const routes = [
  // {
  //   path: '/',
  //   name: 'MenuPrincipal',
  //   component: MenuPrincipal
  // },
  {
    path: '/outro',
    name: 'OutroComponente',
    component: OutroComponente
  },
  {
    path: '/imagens',
    name: 'ImagensDiversas',
    component: ImagensDiversas
  },
  {
    path: '/video',
    name: 'VideoUnico',
    component: VideoUnico
  },
  {
    path: '/tabela',
    name: 'TabelaDiversos',
    component: TabelaDiversos
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
