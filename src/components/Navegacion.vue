<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navegacion w-[100vw] h-[10vh] bg-[peru] flex flex-row">
        <router-link to="Principal" class="hover:bg-amber-200 px-2">Ir a Principals

        </router-link>
        <router-link to="Inicio" class="hover:bg-amber-200 px-2">Ir a Inicio

        </router-link>
        <router-link to="Usuario" class="hover:bg-amber-200 px-2">Ir a Segunda
            
        </router-link>
        <router-link to="Login" class="hover:bg-amber-200 px-2">Ir a Login
            
        </router-link>
        <router-link to="Bienvenida" class="hover:bg-amber-200 px-2">Ir a Bienvenida
            
        </router-link>
    </nav>
</template>

