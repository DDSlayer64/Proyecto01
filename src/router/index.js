import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Bienvenida from '../views/Bienvenida.vue'
import Login from '../views/Login.vue'
import Mensajes from '../views/Mensajes.vue'
import Usuario from '../views/Usuario.vue'

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path:"/inicio",
                component: Inicio,
                name: 'inicio'
            },
            {
                path:"/login",
                component: Login,
                name: 'login'
            },
            {
                path:"/mensajes",
                component: Mensajes,
                name: 'mensajes'
            },
            {
                path:"/bienvenida",
                component: Bienvenida,
                name: 'bienvenida'
            },
            {
                path:"/usuario",
                component: Usuario,
                name: 'usuario'
            }
            
        ]
    }
)

export default router