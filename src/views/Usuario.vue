<script setup>
import Inicio from './Inicio.vue';

</script>

<template>
    <div class="todo w-screen h-[90vh] flex flex-col justify-start items-center pt-15">
        <div class="cajas bg-blue-500 w-[80vw] h-[80vh] flex flex-col justify-center items-center space-y-6 ">
            
            <div class="w-[20vw] bg-white rounded-full aspect-square"></div>

            <h3 class="h3 p-4 rounded border border-gray-300">Nombre completo </h3>
            <h3 class="h3 p-4 rounded border border-gray-300">C.I.</h3>
            <h3 class="h3 p-4 rounded border border-gray-300">Rol</h3>
            <h3 class="h3 p-4 rounded border border-gray-300">Correo electrónico</h3>
        </div>

    </div>
</template>


<style>
</style>