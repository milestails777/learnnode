<script setup>
import { computed } from 'vue';

const props = defineProps({
  currentPage: Number,
  totalPages: Number,
});

const emit = defineEmits(['page-change']);

function goTo(page) {
  if (page === '...' || !page) return;
  emit('page-change', page);
}

const pages = computed(() => {
  const total = props.totalPages || 0;
  const current = props.currentPage || 1;

  
  if (total === 0) return [];

  const result = [];

  
  if (total <= 7) {
    for (let i = 1; i <= total; i++) {
      result.push(i);
    }
    return result;
  }

  
  result.push(1);

  
  if (current > 3) {
    result.push('...');
  }

  
  for (let i = current - 1; i <= current + 1; i++) {
    if (i > 1 && i < total) {
      result.push(i);
    }
  }

  
  if (current < total - 2) {
    result.push('...');
  }

  
  result.push(total);

  return result;
});
</script>
<template>
  <div class="pagination is-flex is-flex-wrap-wrap is-justify-content-center">

    <button
      v-for="(p, i) in pages"
      :key="i"
      class="button mx-1"
      :class="{ 'is-primary': p === currentPage }"
      :disabled="p === '...'"
      @click="goTo(p)"
    >
      {{ p }}
    </button>

  </div>
</template>