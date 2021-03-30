import { createApp } from 'vue'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { firebase } from '@firebase/app'
import './assets/skeleton.css'
import './assets/bg.css'
import './assets/global.css'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const configOptions = {
  apiKey: 'AIzaSyBm8FD1icuVyrhoRPjwhuWWQXJXiYgvsqI',
  authDomain: 'cura-64684.firebaseapp.com',
  databaseURL: 'https://cura-64684.firebaseio.com/',
  projectId: 'cura-64684',
  storageBucket: 'cura-64684.appspot.com',
  messagingSenderId: '862840094498',
  appId: '1:862840094498:web:6e57b96b9b0e801cc76f7b',
}

firebase.initializeApp(configOptions)

app.use(router)
app.mount('#app')
