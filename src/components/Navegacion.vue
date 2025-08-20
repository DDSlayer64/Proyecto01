<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navegacion w-[100vw] h-[10vh] bg-blue-500 flex flex-row">
        <router-link to="notificaciones" class="hover:bg-blue-400 px-2 w-[5%] bg-blue-700  rounded  border-2 border-blue-600">Notificaciones
            
        </router-link>
        <div class="w-[70%] h-[100%]"></div>
        <router-link to="notas" class="hover:bg-blue-400 px-2 w-[5%] bg-blue-700 border-2 border-blue-600 ">Notas
            
        </router-link>
        <router-link to="productos" class="hover:bg-blue-400 px-2 w-[5%] bg-blue-700  border-2 border-blue-600">Productos

        </router-link>
        <router-link to="ventas" class="hover:bg-blue-400 px-2 w-[5%] bg-blue-700  border-2 border-blue-600">Ventas

        </router-link>
        <router-link to="balance" class="hover:bg-blue-400 px-2 w-[5%] bg-blue-700  border-2 border-blue-600">Balance 

        </router-link>
        <router-link to="usuario" class="hover:bg-blue-400 px-2 w-[5%] bg-blue-700  border-2 border-blue-600">Usuario

        </router-link>
        
    </nav>
</template>

