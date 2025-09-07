<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
   <div class="w-[100vw] h-[90vh] bg-sky-200 flex justify-center items-center">
    <div class="w-[80vw] h-[80vh] space-y-4">
        <div class="w-[80vw] h-[10vh] bg-blue-900 mb-20 flex justify-center items-center text-center  rounded-2xl border-5 border-green-500">
            <h3 class="bg-blue-900 text-white w-full text-xl ">Bienvenido a la prueba de programacion,por favor inicie sesion o registrese para ingresar</h3>
        </div>
        <div class="w-[80vw] h-[30vh] flex justify-around ">
            <div class=" flex h-[50%] justify-center items-center w-[40%] text-base bg-blue-900 rounded-2xl border-5 border-green-500">
                <router-link class="text-white text-xl w-full h-full flex justify-center items-center" to="Registro">Regstrate</router-link> 
                </div>
            <div class=" flex h-[50%] justify-center items-center w-[40%] text-center bg-blue-900 rounded-2xl border-5 border-green-500">
                <router-link class="text-white text-xl w-full h-full flex justify-center items-center" to="login">Inicia sesion</router-link> 
                </div>
        </div>
    </div>
   </div>
</template>