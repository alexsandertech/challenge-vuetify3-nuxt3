<template>
  <v-container class="page">
    <NuxtPage />
    <div class="wrapper-button">
      <CustomButton :label="'Toggle highlight'" :onClick="handleClick" :color="'green'" />
    </div>

    <h1>Board</h1>
    <div class="wrapper-cards">
      <EquipmentCard 
        v-for="equipament in equipmentList" 
        :key="equipament.id"
        :equipment="equipament"
        ref="equipamentCardRefs"
        />
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import EquipmentCard from './../components/EquipamentCard.vue'
  import CustomButton from './../components/CustomButton.vue'
  import { IEquipment } from './../types/components/equipament'
  import { ref } from 'vue'

  const equipmentList: IEquipment[] = [
    { id: '1', type: 'crane', name: 'Crane #001', hour_count: 50 },
    { id: '2', type: 'forklift', name: 'Forklift #002', hour_count: 50 },
    { id: '3', type: 'forklift', name: 'Forklift #003', hour_count: 20 },
    { id: '4', type: 'crane', name: 'Crane #004', hour_count: 10 },
  ];
  
  const equipamentCardRefs = ref<InstanceType<typeof EquipmentCard>[]>([])

  const handleClick = () => {
    equipamentCardRefs.value.forEach(ref => {
    ref?.toggleHighlight()
  })
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
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
</style>
  