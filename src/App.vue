<script setup>
import { ref } from 'vue';

    let message = ref('Hello vue!');

function input(event) {
    console.log(event.target.value);
}
</script>

<template>
    <h1>{{ message }}</h1>
    <button class="button is-primary" v-on:click="message = 'Hello TA24B!'">Click the Button</button>
    <input class="input" v-bind:value="message" v-on:input="input">
</template>

<style>

</style>