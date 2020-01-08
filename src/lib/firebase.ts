import firebase, { User } from 'firebase'

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

export default {
  async logout() {
    await firebase.auth().signOut()
  }
}
