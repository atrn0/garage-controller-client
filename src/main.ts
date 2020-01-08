import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyADynxR3NJ3jGpvvZTMQvKooXg3BVPq-5w',
  authDomain: 'aratasato.firebaseapp.com',
  databaseURL: 'https://aratasato.firebaseio.com',
  projectId: 'aratasato',
  storageBucket: 'aratasato.appspot.com',
  messagingSenderId: '118778948882',
  appId: '1:118778948882:web:c45ef2a7cabb81083d17cb',
  measurementId: 'G-VLWVD2RV5X'
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
