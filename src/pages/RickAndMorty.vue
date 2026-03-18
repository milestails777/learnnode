<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
const res = await axios.get('https://rickandmortyapi.com/api/character');
let characters = ref([]);
let info = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
});
characters.value = res.data.results;
info.value = res.data.info;

async function next() {
    const res = await axios.get(info.value.next);
    characters.value = res.data.results;
    info.value = res.data.info;
}

async function prev() {
    const res = await axios.get(info.value.prev);
    characters.value = res.data.results;
    info.value = res.data.info;
}

</script>
<template>
<div class="is-flex is-justify-content-space-between mb-2">
    <button class="button is-primary" :disabled="!info.prev" @click="prev">Prev</button>
    <button class="button is-primary" :disabled="!info.next" @click="next">Next</button>
</div>


<div class="columns is-multiline">
    <div class="column is-3" v-for="character in characters">
        <CharacterCard :character="character"></CharacterCard>
    </div>
</div>
</template>