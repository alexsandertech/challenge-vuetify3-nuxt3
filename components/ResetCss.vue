<template>
    <div class="reset-child">
      <slot></slot>
    </div>
</template>
  
<script setup lang="ts">
</script>

<style scoped>
    .reset-child {
        all: initial; /* Redefinir todas as propriedades CSS para seus valores iniciais */
        width: 100%;
        height: 100%;
    }
</style>
  