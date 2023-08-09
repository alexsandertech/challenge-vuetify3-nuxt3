<template>
  <v-container class="page">
    <NuxtPage />


    <h1>Board</h1>
    <div class="wrapper-button">
      <CustomButton :label="'Toggle highlight'" :onClick="handleClick" :color="'green'" />
      <CustomButton :label="'Add rand equipament +'" :onClick="handleNewRandEquipament" :color="'blue'" />
    </div>
    <div class="wrapper-cards">
      <EquipmentCard 
        v-for="equipament in equipmentList" 
        :key="equipament.id"
        :equipment="equipament"
        ref="equipamentCardRefs"
        @submit-comment="handleComment"
        />
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import EquipmentCard from './../components/EquipamentCard.vue'
  import CustomButton from './../components/CustomButton.vue'
  import { IEquipment } from './../types/components/equipament'
  import { ref } from 'vue'

  const equipmentList = ref<IEquipment[]>([
    { id: '1', type: 'crane', name: 'Crane #001', hour_count: 50 },
    { id: '2', type: 'forklift', name: 'Forklift #002', hour_count: 50 },
    { id: '3', type: 'forklift', name: 'Forklift #003', hour_count: 20 },
    { id: '4', type: 'crane', name: 'Crane #004', hour_count: 10, src_img: 'https://static.wixstatic.com/media/8ac9d0_c5a77d51c64e4d4f85d78deba27c2f8f.jpg/v1/fill/w_560,h_418,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8ac9d0_c5a77d51c64e4d4f85d78deba27c2f8f.jpg' },
    { id: '5', type: 'crane', name: 'Crane #005', hour_count: 12 },
    { id: '6', type: 'forklift', name: 'Forklift #006', hour_count: 44 },
  ]);
  
  const equipamentCardRefs = ref<InstanceType<typeof EquipmentCard>[]>([])
  
  const handleNewRandEquipament = () => {
    const id = (equipmentList.value.length + 1).toString();
    const type = Math.random() < 0.5 ? 'crane' : 'forklift';
    const name = `${type.charAt(0).toUpperCase() + type.slice(1)} #00${id}`;
    const hour_count = Math.floor(Math.random() * 100);

    const newEquipment: IEquipment = { id, type, name, hour_count };

    equipmentList.value.push(newEquipment);
  }

  const handleClick = () => {
    equipamentCardRefs.value.forEach(ref => {
      ref?.toggleHighlight()
    })
  }

  const handleComment = (comment: string, id: string) => {
    alert(`Comentário recebido card [${id}]: ${comment}`)
  }
</script>


<style scoped>
    .page {
      width: auto;
      height: auto;
    }
    .wrapper-button {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 20px;
      flex-wrap: wrap;
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
    flex-wrap: wrap;
    }
</style>
  