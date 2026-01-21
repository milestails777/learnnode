<script setup>
import { ref } from 'vue';

let items = ref(['Sai', 'Piim', 'Viin', 'õlu']);
let newItem = ref('');

function add(){
    if(newItem.value.trim() !== '') {
        items.value.push(newItem.value.trim());
    }
    newItem.value = '';
}

//function input(event) {
 //   console.log(event.target.value);
 //   message.value = event.target.value;
//}
</script>

<template>
    <div class="container">
        <div class="field has-addons mt-2">
            <div class="control is-expanded">
                <input v-model="newItem" class="input" type="text" @keypress.enter="add">
            </div>
            <div class="control">
                <button class="button is-info" @click="add">
                Search
                </button>
            </div>
        </div>
        <div class="content">
            <hl>All Items</hl>
            <ul>
                <li v-for="item in items">{{item}}</li>
                <li>Linus Torvalds</li>
            </ul>
        </div>
    </div>
</template>

<style>

</style>