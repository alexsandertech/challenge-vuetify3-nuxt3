<template>
  <div style="display: flex; width: 100vw; height: 100vh; justify-content: center; align-items: center;">
    <v-card
      class="mx-auto"
      width="400"
      prepend-icon="mdi-home"
    >
      <template v-slot:title>
        Test component
      </template>

      <v-card-text>
        This is content
      </v-card-text>
    </v-card>
  </div>
</template>