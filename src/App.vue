<script setup>
    let message = 'Hello vue!';
</script>

<template>
    <h1>{{ message }}</h1>
    <button class="button is-primary" v-on:click="console.log('click')">Click the Button</button>
</template>

<style>
    
</style>