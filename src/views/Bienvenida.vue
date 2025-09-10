<template>
  <div class="welcome-container ">
    <h1>Bienvenido/a</h1>
    <div class="button-container">
      <button @click="goToLogin">Iniciar Sesión</button>
      <button @click="goToRegister">Registrarse</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' });
    },
    goToRegister() {
      this.$router.push({ name: 'Register' }); 
    }
  }
}
</script>

<style scoped>
.welcome-container {
  text-align: center;
  margin-top: 50px;
}

.button-container {
  margin-top: 20px;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: blue; 
  color: white; 
}

button:hover {
  background-color: #0056b3;
}
</style>