<script setup>
import { ref } from 'vue';

let fact = ref('');
let res = await fetch('https://catfact.ninja/fact');
let data = await res.json();
fact.value = data.fact;
</script>

<template>
<div class="content">
    <h1>{{ fact }}</h1>
</div>
</template>