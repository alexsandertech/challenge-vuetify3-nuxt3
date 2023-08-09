<template>
  <v-card class="wrapper-card" :class="{ highlighted: highlighted }">
    <v-card-title class="title center-item">
      <v-icon  v-if="equipment.type == 'crane'" >mdi-crane</v-icon>
      <v-icon  v-if="equipment.type == 'forklift'">mdi-forklift</v-icon>
      {{ equipment.name }}
    </v-card-title>
    <v-card-text class="center-item"><strong>Type:</strong> {{ equipment.type }}</v-card-text>
    <v-card-text class="wrapper-hour center-item" ><strong>Hour count:</strong> {{ equipment.hour_count }}</v-card-text>
    <v-card-text><strong>Cost:</strong> ${{ cost }}</v-card-text>
    <v-card-text>
      <v-textarea v-model="comment" label="Comment" outlined></v-textarea>
      <CustomButton :label="'Submit'" :onClick="submitComment" :color="'green'"/>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import CustomButton from './CustomButton.vue';
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

  // Variável reativa para o comentário
  const comment = ref('')
  const emit = defineEmits<(eventName: 'submit-comment', comment: string, equipmentId: string) => void>()

  const submitComment = () => {
    emit('submit-comment', comment.value, equipment.value.id)
    comment.value = ''
  }

</script>

<style scoped>
  .wrapper-card {
    max-width: 250px;
  }
  .center-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 5px;
  }
  .highlighted {
    -webkit-box-shadow: 4px 10px 24px 0px rgba(10,168,107,1);
    -moz-box-shadow: 4px 10px 24px 0px rgba(10,168,107,1);
    box-shadow: 4px 10px 24px 0px rgba(10,168,107,1);
  }
  .wrapper-hour {
    background-color: #eeeeee; 
  }
  .title {
    background-color: #04AA6D;
    margin-bottom: 5px;
    color: #FFF;
  }
</style>