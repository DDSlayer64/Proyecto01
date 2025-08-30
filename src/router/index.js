import { createRouter, createWebHistory } from 'vue-router';
import Principal from '../views/Principal.vue';
import Login from '../views/Login.vue';
import Usuario from '../views/Usuario.vue';
import Mensajes from '../views/Mensajes.vue';

const routes = [
  { path: '/', redirect: '/Login' },
  { 
    path: '/Principal',
    name: "Principal",
    component: Principal,
    props: route => ({
      nombre: route.query.nombre,
      email: route.query.email
    })
  },
  { path: '/Login', component: Login },
  { path: '/Usuario', component: Usuario },
  { path: '/Usuario/Mensajes', component: Mensajes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
