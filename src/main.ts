import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


let myWindow = window as any;

const app = createApp(App);
app.mount('#'+myWindow.asoneId)
