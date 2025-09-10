import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Usuario from '../views/Usuario.vue'
import Mensajes from '../views/Mensajes.vue'
import Principal from '../views/Principal.vue'
import Bienvenida from '../views/Bienvenida.vue'
import Registro from '../views/Registro.vue'

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
                path:"/usuario",
                component: Usuario,
                name: 'usuario'
            },
            {
                path:"/usuario/mensajes",
                component: Mensajes,
                name: 'mensajes'
            },
            {
                path:"/principal",
                component: Principal,
                name: 'principal'
            },
            {
                path:"/bienvenida",
                component: Bienvenida,
                name: 'bienvenida'
            },
            {
                path:"/Registro",
                component: Registro,
                name: 'registro'
            }
            
        ]
    }
)

export default router;
