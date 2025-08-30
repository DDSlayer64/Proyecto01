<script setup>
router.push({
  name: 'principal',
  query: {
    nombre: usuarioIngresado,
    email: emailIngresado
  }
});
</script>

