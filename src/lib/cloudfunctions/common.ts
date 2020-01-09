import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://us-central1-aratasato.cloudfunctions.net/',
  timeout: 1000,
  withCredentials: true
})

export default instance
