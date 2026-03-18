<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
const res = await axios.get('https://rickandmortyapi.com/api/character');
let characters = ref()
characters.value = res.data.results;
</script>

<template>
<div class="columns is-multiline">
    <div class="column is-3" v-for="character in characters">
        <CharacterCard :character="character"></CharacterCard>
    </div>
</div>
</template>