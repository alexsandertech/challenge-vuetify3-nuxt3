<template>
  <v-card class="wrapper-card" :class="{ highlighted: highlighted }">
    <v-card-title class="title">{{ equipment.name }}</v-card-title>
    <v-card-text>Type: {{ equipment.type }}</v-card-text>
    <v-card-text>Hour count: {{ equipment.hour_count }}</v-card-text>
    <v-card-text>Cost: ${{ cost }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { IEquipment } from './../types/components/equipament'

  const highlighted = ref(false)

  // const equipment = ref<IEquipment>({
  //   id: '1',
  //   type: 'crane',
  //   name: 'Crane 001',
  //   hour_count: 50
  // })

  const props = defineProps({
    equipment: {
      type: Object as () => IEquipment,
      required: true,
    }
  });

  const equipment = ref<IEquipment>(props.equipment)

  const cost = computed(() => {
    const hour_cost = equipment.value.type === 'crane' ? 15 : 5
    return equipment.value.hour_count * hour_cost
  })

  const toggleHighlight = () => {
    highlighted.value = !highlighted.value
  }

  defineExpose({ toggleHighlight })
</script>

<style scoped>
  .wrapper-card {
    max-width: 250px;
  }
  .highlighted {
    background-color: yellow; 
  }
  .title {
    background-color: #04AA6D;
    margin-bottom: 5px;
    color: #FFF;
  }
</style>