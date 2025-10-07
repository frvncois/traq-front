import './assets/main.css'
import Lenis from 'lenis'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const lenis = new Lenis({
  autoRaf: true,
  touchMultiplier: 2,
});

lenis.on('scroll', (e) => {
});

window.lenis = lenis

app.use(createPinia())
app.use(router)
app.mount('#app')