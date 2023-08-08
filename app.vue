<template>
  <div id="app">
    <NuxtLayout class="layouts" :navLinks="navLinks">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Board', path: '/board' },
    { label: 'Grid', path: '/grid' },
    { label: 'Other', path: '/any' }
  ];

  onMounted(() => {
    document.title = 'Desafio Nuxt3 Vuetify3';
  });
</script>

<style scoped>
  #app {
    background-color: rgb(241, 241, 241);
  }
</style>
