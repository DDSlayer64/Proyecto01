<script setup>
import { RouterLink } from 'vue-router';

function LimpiarCampos (){
document.getElementById(Form).reset()
}


</script>

<template>
    <div class="w-[100vw] h-[90vh] bg-sky-200 flex justify-center items-center ">

        <div class="w-[60vw] h-[80vh] rounded-2xl flex justify-center">

            <div class="w-[60%] h-[100%] bg-blue-900 rounded-2xl mr-2 p-10 border-4 border-green-500">
                <form action=""  id="Form" class="flex flex-col space-y-4">
                    
                    <h3 class="text-white text-2xl text-center ">Registro</h3>
                    
                    <input type="text" id="Nombre" placeholder="Nombre y apellido" class="p-3 mt-7 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
                    
                    <input type="email" id="Correo" placeholder="Correo electronico" class="p-3 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
                    
                    <input type="text" id="Celular" placeholder="Telefono o celular" class="p-3 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition"/>
                    
                    <input type="password" id="Contra" placeholder="Contraseña" class="p-3 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition" />
                    
                    <button type="" @click="LimpiarCampos" class="p-3 mx-40 active:bg-blue-500 mt-12 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition">Limpiar Formulario</button>
                    
                    <button type="submit" id="registrarBtn" class="p-3 mx-40 active:bg-blue-500 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition">Registrarse</button>
                    
                    <h3 class="">Para ir a la pagina inicio haz clic aqui.<router-link to="/" class="text-white">Ir a inicio</router-link> </h3>
                
                </form>
            </div>

           

        </div>

    </div>
</template>