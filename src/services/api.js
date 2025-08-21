// src/services/api.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:1337',
  headers: { 'Content-Type': 'application/json' }
})

export default {
  getHome() {
    return apiClient.get('/api/home?populate=*')
  },
  getAbout() {
    return apiClient.get('/api/about?populate=*')
  },
  getEvents() {
    return apiClient.get('/api/events?populate=*')
  },
  getEventByDocumentId(documentId) {
    return apiClient.get(`/api/events?filters[documentId][$eq]=${documentId}&populate=*`)
  }
}
