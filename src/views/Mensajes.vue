
<template>
  <div class="p-6 bg-sky-200 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Mensajes enviados</h1>

    <!-- BOTONES -->
    <div class="mb-6 space-x-4">
      <button @click="goToPrincipal" class="px-4 py-2 bg-blue-900 text-white rounded hover:bg-sky-700 border-3 border-green-500">
        Ir a /principal
      </button>
      <button @click="openModal" class="px-4 py-2 bg-blue-900 text-white rounded hover:bg-sky-700 border-3 border-green-500">
        Crear nuevo mensaje
      </button>
    </div>

    <!-- LISTA DE MENSAJES -->
    <div v-if="messages.length" >
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="bg-blue-900 text-white shadow-md p-4 rounded-2xl mb-4 border-4 border-green-500"
      >
        <p><strong>Destinatario:</strong> {{ msg.destinatario }}</p>
        <p><strong>Título:</strong> {{ msg.titulo }}</p>
        <p><strong>Contenido:</strong> {{ msg.contenido }}</p>
        <p class="text-sm text-white">
          <strong>Fecha y hora:</strong> {{ msg.fecha }}
        </p>
      </div>
    </div>
    <div v-else class="">No hay mensajes enviados aún.</div>

    <!-- MODAL -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded shadow-lg w-[90%] max-w-md space-y-4">
        <h2 class="text-xl font-semibold">Nuevo mensaje</h2>

        <input v-model="nuevoMensaje.destinatario" placeholder="Destinatario" class="w-full border p-2 rounded" />
        <input v-model="nuevoMensaje.titulo" placeholder="Título" class="w-full border p-2 rounded" />
        <textarea v-model="nuevoMensaje.contenido" placeholder="Contenido" class="w-full border p-2 rounded"></textarea>

        <div class="flex justify-end space-x-2">
          <button @click="cancelar" class="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-300">Cancelar</button>
          <button @click="enviarMensaje" class="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-500">Enviar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      showModal: false,
      nuevoMensaje: {
        destinatario: '',
        titulo: '',
        contenido: '',
      }
    }
  },
  methods: {
    goToPrincipal() {
      this.$router.push('/principal')
    },
    openModal() {
      this.showModal = true
      this.nuevoMensaje = {
        destinatario: '',
        titulo: '',
        contenido: '',
      }
    },
    cancelar() {
      this.showModal = false
    },
    enviarMensaje() {
      if (!this.nuevoMensaje.destinatario || !this.nuevoMensaje.titulo || !this.nuevoMensaje.contenido) {
        alert('Todos los campos son obligatorios.')
        return
      }

      const nuevaFecha = new Date().toLocaleString()

      this.messages.push({
        ...this.nuevoMensaje,
        fecha: nuevaFecha,
      })

      this.showModal = false
    }
  }
}
</script>

<style scoped>
/* Estilos opcionales para scroll bloqueado cuando el modal está abierto */
body.modal-open {
  overflow: hidden;
}
</style>

