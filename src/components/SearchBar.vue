<template>
  <div class="field has-addons mb-4">
    <div class="control is-expanded">
      <input 
        v-model="searchTerm" 
        class="input" 
        type="text" 
        placeholder="Поиск персонажей..." 
        @input="emitSearch"
      />
    </div>
    <div class="control">
      <button class="button is-info" @click="emitSearch">Найти</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const searchTerm = ref('')
const emit = defineEmits(['search'])

const emitSearch = () => {
  emit('search', searchTerm.value)
}
</script>