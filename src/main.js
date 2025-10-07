import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

// Initialize ScrollSmoother after app mount
setTimeout(() => {
  const smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 1.5,
    effects: true,
    smoothTouch: 0.1,
    normalizeScroll: true,
  })

  window.smoother = smoother

  // Refresh on resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh()
  })
}, 100)