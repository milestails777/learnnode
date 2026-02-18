<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';

</script>

<template>  
    <nav>
        <RouterLink to="/">ToDo</RouterLink>
        <RouterLink to="/modals">Modals</RouterLink>
    </nav>
    <div class="container">
        <RouterView></RouterView>
    </div>
</template>

<style>

</style>