<script setup>
import { ref } from 'vue';

    let message = ref('Hello vue!');

//function input(event) {
 //   console.log(event.target.value);
 //   message.value = event.target.value;
//}
</script>

<template>
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <button class="button is-primary" @click="message = 'Hello TA24B!'">Click the Button</button>
    <input class="input" v-model="message">
</template>

<style>

</style>