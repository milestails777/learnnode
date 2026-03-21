<script setup>
import { ref } from 'vue';

let joke = ref('');
let res = await axios.get('https://api.chucknorris.io/jokes/random');
let data = await res.json();
joke.value = data.value;
</script>
<template>
<div class="content">
    <h1>Rest In Peace, Chuck Norris. 1948-2026</h1>
    <h1>{{ joke }}</h1>
</div>
</template>