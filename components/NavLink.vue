<template>
    <NuxtLink :to="to" class="n-link-base nav-item" :class="selectedClass">
      <slot></slot>
    </NuxtLink>
</template>
  
<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import { computed } from 'vue';
  
    const props = defineProps({
      to: String,
    });
  
    const router = useRouter();
  
    const selectedClass = computed(() => {
      return router.currentRoute.value.path === props.to ? 'nav-item-selected' : '';
    });
</script>
  
<style scoped>
    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-decoration: none;
        height: 100%;
        padding: 0px 8px 0px 8px;
    }
  .nav-item-selected {
    background-color: #04AA6D;
    color: black;
  }
</style>
  