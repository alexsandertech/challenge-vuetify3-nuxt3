<template>
  <v-container class="page">
    <NuxtPage />
    <div class="wrapper-button">
      <CustomButton :label="'Toggle highlight'" :onClick="handleClick" :color="'green'" />
    </div>

    <h1>Board</h1>
    <div class="wrapper-cards">
      <EquipmentCard :equipment="equipment" ref="equipmentCardRef"/>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import EquipmentCard from './../components/EquipamentCard.vue'
  import CustomButton from './../components/CustomButton.vue'
  import { IEquipment } from './../types/components/equipament'
  import { ref } from 'vue'

  const equipment = ref<IEquipment>({
    id: '1',
    type: 'crane',
    name: 'Crane 001',
    hour_count: 50
  })

  const equipmentCardRef = ref<InstanceType<typeof EquipmentCard> | null>(null)
  const handleClick = () => {
    equipmentCardRef.value?.toggleHighlight()
  }
</script>


<style scoped>
    .page {
      width: auto;
      height: auto;
    }
    .wrapper-button {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
    }
    .wrapper-cards {
      padding: 20px 2px 20px 2px;
      width: 100%;
      height: 100%;
    }
</style>
  