<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
import PaginationBar from '../components/PaginationBar.vue'; 
import SearchBar from '../components/SearchBar.vue';

let characters = ref([]);
let info = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
});

let currentPage = ref(1);
let search = ref(""); 


const res = await axios.get('https://rickandmortyapi.com/api/character');
characters.value = res.data.results;
info.value = res.data.info;


async function getCharacters(page) {
    const res = await axios.get(`https://rickandmortyapi.com/api/character`, {
        params: {
            page,
            name: search.value
        }
    });
    characters.value = res.data.results;
    info.value = res.data.info;
    currentPage.value = page;
    window.scrollTo(0, 0);
}


async function next() {
    if (currentPage.value < info.value.pages) {
        await getCharacters(currentPage.value + 1);
    }
}

async function prev() {
    if (currentPage.value > 1) {
        await getCharacters(currentPage.value - 1);
    }
}


function changePage(page) {
    getCharacters(page);
}
let debounce = null;
function doSearch(value) {
    clearTimeout(debounce);
    debounce = setTimeout(async () => {
        search.value = value;
        await getCharacters(1);
    }, 400)
}
</script>
<template>

<SearchBar @search="doSearch">

</SearchBar>

<PaginationBar
    :currentPage="currentPage"
    :totalPages="info.pages"
    @page-change="changePage"
/>

<div class="is-flex is-justify-content-space-between mb-2">
    <button class="button is-primary" :disabled="currentPage === 1" @click="prev">Prev</button>
    <button class="button is-primary" :disabled="currentPage === info.pages" @click="next">Next</button>
</div>

<div class="columns is-multiline">
    <div class="column is-3" v-for="character in characters" :key="character.id">
        <CharacterCard :character="character"></CharacterCard>
    </div>
</div>

</template>