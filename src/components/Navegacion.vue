<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navegacion w-[100vw] h-[10vh] bg-green-400 flex flex-row">
        <router-link to="inicio" class="hover:bg-amber-200 px-2">Ir a Inicio

        </router-link>
        <router-link to="segunda" class="hover:bg-amber-200 px-2">Ir a Segunda
            
        </router-link>
        <router-link to="usuario" class="hover:bg-amber-200 px-2">Ir a Usauario

        </router-link>
        <router-link to="usuario/mensajes" class="hover:bg-amber-200 px-2">Ir a Mensajes

        </router-link>
    </nav>
</template>

