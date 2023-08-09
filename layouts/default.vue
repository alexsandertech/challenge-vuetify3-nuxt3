<template>
    <Navigator :navLinks="navLinks" />
    <NuxtLoadingIndicator />
    <v-container class="bg-surface-variant default">
        <ResetCss>
            <slot></slot>
        </ResetCss>
    </v-container>
    <footer>
      <div class="text-center p-4 op-50">
        Current route: <code>{{ router.currentRoute.value.path }}</code>
      </div>
      <button @click="setPageLayout('default')">
        layouts/default.vue
      </button>
      <!-- <button @click="setPageLayout('')">
        Remove layout
      </button> -->
    </footer>
</template>

<script setup lang="ts">
    import Navigator from './../components/Navigator.vue';
    import { INavLinkProps } from './../types/components/navlink'
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const props = defineProps({
        navLinks: Array as () => INavLinkProps[],
    });
</script>

<style scoped>
  .default {
    display: flex;
    min-height: calc(100vh - 40px);
    height: fit-content;
    width: 100%;
    border: 1px solid #cfcfcf;
    padding: 1rem;
    position: relative;
    background-color: #fff !important;
  }
  .default::before {
    content: 'layouts|default.vue';
    position: absolute;
    top: 2px;
    left: 5px;
    color: #ddd;
    font-family: monospace;
  }
</style>