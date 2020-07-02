import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase"

const configOptions = {
	apiKey: "AIzaSyBWWzAucUGVF5mJD1y5Qmc-pCaQ2G5zz1o",
	authDomain: "minet-3f92e.firebaseapp.com",
	databaseURL: "https://minet-3f92e.firebaseio.com",
	projectId: "minet-3f92e",
	storageBucket: "minet-3f92e.appspot.com",
	messagingSenderId: "1038148748536",
	appId: "1:1038148748536:web:da555f8152698ae369e70d",
	measurementId: "G-TYS1RJ17Y3"
};

Vue.config.productionTip = false


import '@/assets/skeleton.css';
import '@/assets/bg.css';
import '@/assets/global.css';

firebase.initializeApp(configOptions);


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')