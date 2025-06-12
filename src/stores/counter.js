import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsuarioStore = defineStore('counter', {
  state: () => ({
    isAuthenticated: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.get('https://kahvi-back-mgf7.onrender.com/api/usuarios', { email, password })
        this.isAuthenticated = true
        this.error = null
      } catch (err) {
        this.isAuthenticated = false
        this.error = err.response?.data?.error || 'Erro ao fazer login'
      }
    },
  },
})
