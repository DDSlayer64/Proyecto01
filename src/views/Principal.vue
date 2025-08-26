<script setup>
import Inicio from './Inicio.vue';
confirm('¿Seguro que quieres ir a Login?')

</script>

<template>
    <div class="w-[100vw] h-[90vh] flex flex-col items-center bg-sky-200">
        <h1 class="text-4xl">Bienvenido Usuario! </h1>
        <h2 class="text-2xl">Esta es la pagina principal. En la parte superior podras observar la barra de navegacion,
             en la misma podras navegar sobre las diferentes paginas de la web. 
            Diviertase!
        </h2>
        <div>
            <router-link to="Usuario" class="bg-blue-900 text-white px-8 py-3 rounded">
            Ir a Usuario
        </router-link>
        <div>
            <h3 class="text-2xl flex center">¿Esta no es tu cuenta?</h3> 
            <router-link  to="login" @click="confirm" class="bg-blue-900 text-white px-8 py-3 rounded flex bg-center"> Registrate/Inicia Sesion </router-link>

        </div>
        </div>
    </div>
        
</template>