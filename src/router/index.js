import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Segunda from '../views/Segunda.vue'
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
                path:"/segunda",
                component: Segunda,
                name: 'segunda'
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