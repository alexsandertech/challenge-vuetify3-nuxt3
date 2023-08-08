<template>
    <button @click="onClick" :style="buttonStyle" :disabled="disabled">{{ label }}</button>
</template>
  
<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  
  export default defineComponent({
    props: {
      label: {
        type: String,
        required: true
      },
      onClick: {
        type: Function as PropType<() => void>,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'blue'
      }
    },
    computed: {
      buttonStyle() {
        return `background-color: ${this.color}; color: white; border: none; padding: 10px 20px; cursor: pointer;`
      }
    }
  })
</script>
  
<style scoped>
  button {
    font-size: 16px;
    border-radius: 5px;
  }
  button:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
</style>
  