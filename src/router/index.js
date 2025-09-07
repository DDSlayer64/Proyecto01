import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Segunda from '../views/Segunda.vue'
import Usuario from '../views/Usuario.vue'
import Mensajes from '../views/Mensajes.vue'

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
            {
                path:"/",
                component: Inicio,
                name: 'inicio'
            },
            {
                path:"/segunda",
                component: Segunda,
                name: 'segunda'
            },
            {
                path:"/usuario",
                component: Usuario,
                name: 'usuario'
            },
            {
                path:"/usuario/mensajes",
                component: Mensajes,
                name: 'mensajes'
            }
        ]
    }
)

export default router