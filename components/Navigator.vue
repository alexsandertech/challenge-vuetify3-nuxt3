<template>
    <nav class="navigator">
      <NavLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
      >
        {{ link.label }}
      </NavLink>
    </nav>
</template>
  
<script setup lang="ts">
    import NavLink from './NavLink.vue';
    import { INavLinkProps } from './../types/components/navlink'

    const props = defineProps({
        navLinks: Array as () => INavLinkProps[],
    });
</script>

<style scoped>
    .navigator {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      background-color: #333;
      height: 40px;
    }
</style>
  