<script setup>
import Inicio from './Inicio.vue';
</script>

<template>
    <div class="todo bg-amber-400 w-screen h-[90vh] flex justify-center items-center">
        <div class="bg-blue-500 w-[50vw] h-[50%] flex">
            <div class="w-[50%] h-[100%] flex items-left">
                <div class="w-[100%] h-[50%]"><h3>Nombre y apellido</h3></div>
                <div class="w-[100%] h-[50%]"><h3>Numero de contacto</h3></div>
               
            </div>
            <div class="w-[50%] h-[100%] ">
                <div class="w-[100%] h-[50%]"><p>Correo electronico</p></div>
                <div class="w-[100%] h-[50%]"><p>Rol</p></div>
            
                
            </div>
        </div>
    </div>
</template>