<script setup>
import Inicio from './Inicio.vue';

function mostrarAlerta(){
    alert("Esta funcionaldidad aun no esta disponible")
}

</script>

<template>
    <div class="todo bg-sky-200 w-screen h-[90vh] flex flex-col justify-evenly items-center ">
        <div class="cajas  w-[50vw] h-[50%] flex">
            <div class="caja-01 w-[50%] h-[100%] flex flex-col py-5 space-y-4 p-4">
                <div class="bg-blue-900 w-[100%] h-[50%] flex justify-center items-center rounded-2xl border-5 border-green-500">
                    <h3 class="text-white">Nombre y apellido</h3></div>
                <div class="bg-blue-900 w-[100%] h-[50%] flex justify-center items-center rounded-2xl border-5 border-green-500">
                    <h3 class="text-white">Numero de contacto</h3></div>
               
            </div>
            <div class="caja-02 w-[50%] h-[100%] flex flex-col py-5 space-y-4 p-4">
                <div class="bg-blue-900 w-[100%] h-[50%] flex justify-center items-center rounded-2xl border-5 border-green-500">
                    <h3 class="text-white">Correo electronico</h3></div>
                <div class="bg-blue-900 w-[100%] h-[50%] flex justify-center items-center rounded-2xl border-5 border-green-500">
                    <h3 class="text-white ">Rol</h3></div>
            
                
            </div>
        </div>


         <div class="configuracion w-[12%] h-[10%]  flex justify-center">
            <button type="submit" class="bg-blue-900 text-white w-full hover:bg-sky-700 active:bg-blue-500 placeholder:bg-black-500 rounded-2xl border-5 border-green-500" 
            @click="mostrarAlerta">Editar perfil</button>
         </div>

    </div>
</template>