<template>
   <div></div>
   <h1>Ola Vue!</h1>
   <p> Meu nome é {{ name }}</p>
</template>

<script>
   export default {
      name: 'PrimeiroComponente',
      data() {
      return {
      nome: "Matheus"
      }
   }
   }
</script>