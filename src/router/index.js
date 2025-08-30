import { createRouter, createWebHistory } from 'vue-router';

// Importa las vistas
import Principal from '../views/principal.vue';
import Login from '../views/Login.vue';
import Usuario from '../views/Usuario.vue';
import Mensajes from '../views/Mensajes.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/principal', component: Principal },
  { path: '/login', component: Login },
  { path: '/usuario', component: Usuario },
  { path: '/usuario/mensajes', component: Mensajes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
