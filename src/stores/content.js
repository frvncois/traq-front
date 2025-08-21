// src/stores/content.js
import { defineStore } from 'pinia'
import apiService from '@/services/api'

export const useContentStore = defineStore('content', {
  state: () => ({
    home: null,
    about: null,
    events: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchHome() {
      try {
        this.loading = true
        const res = await apiService.getHome()
        this.home = res.data.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async fetchAbout() {
      try {
        this.loading = true
        const res = await apiService.getAbout()
        this.about = res.data.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async fetchEvents() {
      try {
        this.loading = true
        const res = await apiService.getEvents()
        this.events = res.data.data
      } catch (err) {
        this.error = err
      } finally {
        this.loading = false
      }
    },

    async fetchEventByDocumentId(documentId) {
      try {
        this.loading = true
        const res = await apiService.getEventByDocumentId(documentId)
        return res.data.data[0] || null
      } catch (err) {
        this.error = err
        return null
      } finally {
        this.loading = false
      }
    }
  }
})
