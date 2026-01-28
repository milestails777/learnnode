<script setup>
import { computed, ref } from 'vue';
let i = 1;

let items = ref([
    {id: i++, text: 'Sai', isDone: false}, 
    {id: i++, text: 'Piim', isDone: true}, 
    {id: i++, text: 'Viin', isDone: false}, 
    {id: i++, text: 'õlu', isDone: true},
    {id: i++, text: 'Linus Torvalds', isDone: true},
 ]);
let newItem = ref('');

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));

//Z
function add(){
    if(newItem.value.trim() !== '') {
        items.value.push({id: i++, text: newItem.value.trim(), isDone: false});
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
                <li v-for="item in items" :key="item.id">
                    {{ item.text }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
             
            </ul>

            <hl>Done Items</hl>
            <ul>
                <li v-for="item in doneItems" :key="item.id">
                    {{ item.text }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
                
            </ul>

            <hl>toDo Items</hl>
            <ul>
                <li v-for="item in toDoItems" :key="item.id">
                    {{ item.text }}
                    <input type="checkbox" v-model="item.isDone">
                </li>
                
            </ul>
        </div>
    </div>
</template>

<style>

</style>