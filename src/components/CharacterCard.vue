<script setup>
defineProps({
  character: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
}
img {
  width: 100%;
  border-radius: 8px;
}
</style>

<template>
  <div class="card">
    <img :src="character.image" :alt="character.name" />

    <h3>{{ character.name }}</h3>

    <p><strong>Status:</strong> {{ character.status }}</p>
    <p><strong>Species:</strong> {{ character.species }}</p>
    <p><strong>Gender:</strong> {{ character.gender }}</p>
    <p><strong>Origin:</strong> {{ character.origin.name }}</p>
  </div>
</template>