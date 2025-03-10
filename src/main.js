import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from '../src/router/index';

const app =createApp(App);

app.use(router);

// app.provide('http', http);
app.mount('#app');
