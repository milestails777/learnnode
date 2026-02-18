//console.log("Hello via Bun!");

//const common = require("./common.js");
//import common from './common.js';
//common.hello();

//import es from './es.js';
//es.hello();

//import fs from 'fs';

//fs.writeFileSync('text.txt', 'Hello Samirius File!!!')

//import boxen from 'boxen';

//console.log(boxen('unicorn', {padding: 1}));

//console.log("Hello vite");

import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router'

import ToDo from './pages/ToDo.vue';
import Modals from './pages/modals.vue';

const routes = [
  { path: '/', component: ToDo },
  { path: '/modals', component: Modals },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


import App from './App.vue';

const app = createApp(App).mount('#app');