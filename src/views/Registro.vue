<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

// Modal control
const showModal = ref(false);
const missingFields = ref([]);

// Limpiar el formulario
function LimpiarCampos() {
  document.getElementById("Form").reset();
  missingFields.value = [];
  showModal.value = false;
}

// Validar y registrar
function validarFormulario(e) {
  e.preventDefault();

  const campos = [
    { id: "Nombre", label: "Nombre" },
    { id: "Correo", label: "Correo electrónico" },
    { id: "Celular", label: "Celular" },
    { id: "Contra", label: "Contraseña" }
  ];

  const vacios = campos.filter(campo => {
    const input = document.getElementById(campo.id);
    return !input.value.trim();
  });

  if (vacios.length > 0) {
    missingFields.value = vacios.map(c => c.label);
    showModal.value = true;

    // Resaltar campos vacíos
    campos.forEach(campo => {
      const input = document.getElementById(campo.id);
      if (!input.value.trim()) {
        input.classList.add('border-red-500');
      } else {
        input.classList.remove('border-red-500');
      }
    });
  } else {
    showModal.value = false;
    alert("Formulario enviado correctamente!");
    // Aquí puedes hacer el envío real si lo necesitas
  }
}
</script>

<template>
  <div class="w-[100vw] h-[90vh] bg-sky-200 flex justify-center items-center">
    <div class="w-[60vw] h-[80vh] rounded-2xl flex justify-center">
      <div class="w-[60%] h-[100%] bg-blue-900 rounded-2xl mr-2 p-10 border-4 border-green-500">
        <form id="Form" class="flex flex-col space-y-4" @submit="validarFormulario">
          <h3 class="text-white text-2xl text-center">Registro</h3>

          <input type="text" id="Nombre" placeholder="Nombre y apellido"
            class="p-3 mt-7 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none transition" />

          <input type="email" id="Correo" placeholder="Correo electrónico"
            class="p-3 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none transition" />

          <input type="text" id="Celular" placeholder="Teléfono o celular"
            class="p-3 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none transition" />

          <input type="password" id="Contra" placeholder="Contraseña"
            class="p-3 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 focus:outline-none transition" />

          <button type="button" @click="LimpiarCampos"
            class="p-3 mx-40 active:bg-blue-500 mt-12 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 transition">Limpiar
            Formulario</button>

          <button type="submit" id="registrarBtn"
            class="p-3 mx-40 active:bg-blue-500 mt-5 text-base text-white hover:bg-blue-800 rounded border-2 border-green-500 transition">Registrarse</button>

          <h3 class="text-white">Para ir a la página de inicio haz clic aquí. <RouterLink to="/" class="text-white underline">Ir a inicio</RouterLink></h3>
        </form>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded shadow-lg w-[300px] text-center">
        <h2 class="text-lg font-semibold text-red-600 mb-4">Campos vacíos</h2>
        <p class="text-gray-700">Por favor completa los siguientes campos:</p>
        <ul class="text-left text-sm mt-2 text-red-500 list-disc list-inside">
          <li v-for="campo in missingFields" :key="campo">{{ campo }}</li>
        </ul>
        <button @click="showModal = false"
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Resaltar campos vacíos */
.border-red-500 {
  border-color: red !important;
}
</style>
