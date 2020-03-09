import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import VueSimpleAlert from "vue-simple-alert"

Vue.use(VueSimpleAlert);

Vue.config.productionTip = false
let app = ''

firebase.initializeApp({
  apiKey: "AIzaSyCyY27P6eYuREEbnx4C1rYGG0h5FUjKbAs",
  authDomain: "masjid-anhar.firebaseapp.com",
  databaseURL: "https://masjid-anhar.firebaseio.com",
  projectId: "masjid-anhar",
  storageBucket: "masjid-anhar.appspot.com",
  messagingSenderId: "553481449056",
  appId: "1:553481449056:web:84326c1fe4a710c8a65d05",
  measurementId: "G-FWQJ42SBRC"
});

firebase.auth().onAuthStateChanged(() => {
  if(!app){
     app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
});
