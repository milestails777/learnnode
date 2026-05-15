import { createApp } from 'vue';
import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Messages from './pages/Messages.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import CatFacts from './pages/CatFacts.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import Canvas from './pages/CanvasExample.vue';
import WebApis from './pages/WebApis.vue';
import BatteryStatus from './pages/BatteryStatus.vue';

const routes = [
  { path: '/', component: ToDo, name: 'ToDo' },
  { path: '/modals', component: Modals, name: 'Modals' },
  { path: '/messages', component: Messages, name: 'Messages' },
  { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris'},
  { path: '/catfacts', component: CatFacts, name: 'Cat Facts' },
  { path: '/rickandmorty', component: RickAndMorty, name: 'Rick And Morty'},
  { path: '/canvas', component: Canvas, name: 'CanvasExample'},
  { path: '/webapis', component: WebApis, name: 'WebApis'},
  { path: '/batterystatus', component: BatteryStatus, name: 'BatteryStatus'}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});



// import the root component App from a single-file component.
import App from './App.vue';
import CanvasExample from './pages/CanvasExample.vue';

const app = createApp(App).use(router).mount('#app');