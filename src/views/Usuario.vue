<script setup>
import Inicio from './Inicio.vue';

function mostrarAlerta(){
    alert("Esta funcionaldidad aun no esta disponible")
}

</script>

<template>
    <div class="todo bg-amber-400 w-screen h-[90vh] flex flex-col justify-evenly items-center ">
        <div class="cajas bg-blue-500 w-[50vw] h-[50%] flex">
            <div class="caja-01 w-[50%] h-[100%]">
                <div class="w-[100%] h-[50%] flex justify-center items-center"><h3>Nombre y apellido</h3></div>
                <div class="w-[100%] h-[50%] flex justify-center items-center"><h3>Numero de contacto</h3></div>
               
            </div>
            <div class="caja-02 w-[50%] h-[100%]">
                <div class="w-[100%] h-[50%] flex justify-center items-center"><p>Correo electronico</p></div>
                <div class="w-[100%] h-[50%] flex justify-center items-center"><p>Rol</p></div>
            
                
            </div>
        </div>


         <div class="configuracion w-[50%] h-[20%] bg-red-400 flex justify-center">
            <button type="submit" class="hover:bg-sky-700 active:bg-pink-200 placeholder:bg-black-500" 
            @click="mostrarAlerta">Editar perfil</button>
         </div>

    </div>
</template>