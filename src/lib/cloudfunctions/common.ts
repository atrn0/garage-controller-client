import axios from 'axios'

interface ErrorResponse {
  message: string
}

const instance = axios.create({
  baseURL: 'https://us-central1-aratasato.cloudfunctions.net/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { instance, ErrorResponse }
