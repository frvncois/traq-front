// src/services/api.js
import axios from 'axios'

// Use environment variable for flexibility (recommended)
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://fantastic-fruit-078b7f5b01.strapiapp.com',
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
