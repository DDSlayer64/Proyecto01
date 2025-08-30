<script>
    import Inicio from './Inicio.vue'
</script>

<template>
  <div class="principal-container">
    <h1>Bienvenido, {{ usuario.nombre }} 👋</h1>

    <div class="menus">
      <div class="menu">
        <h3>Navegación</h3>
        <router-link to="/usuario" class="btn">Perfil de Usuario</router-link>
        <router-link to="/usuario/mensajes" class="btn">Mensajes</router-link>
      </div>

      <div class="menu">
        <h3>Información del Usuario</h3>
        <p><strong>Nombre:</strong> {{ usuario.nombre }}</p>
        <p><strong>Email:</strong> {{ usuario.email }}</p>
        <button @click="mostrarModal = true" class="btn btn-warning">
          Cerrar sesión
        </button>
      </div>
    </div>

    <div v-if="mostrarModal" class="modal-overlay">
      <div class="modal">
        <h3>¿Seguro que quieres cerrar sesión?</h3>
        <div class="modal-buttons">
          <button @click="cerrarSesion" class="btn btn-danger">Sí, salir</button>
          <button @click="mostrarModal = false" class="btn">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const usuario = ref({
  nombre: "Facundo Montero",
  email: "facu@example.com",
});

const mostrarModal = ref(false);
const router = useRouter();

function cerrarSesion() {
  mostrarModal.value = false;
  router.push("/login");
}
</script>

<style scoped>
.principal-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}
.menus {
  display: flex;
  gap: 40px;
  margin-top: 20px;
}
.menu {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
}
.btn {
  display: inline-block;
  margin: 5px 0;
  padding: 8px 12px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-warning {
  background: #ff9800;
}
.btn-danger {
  background: #f44336;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
}
.modal-buttons {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}
</style>
