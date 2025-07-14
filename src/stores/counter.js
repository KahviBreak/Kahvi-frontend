import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    isAuthenticated: false,
    token: null,
    usuario: null,
    error: null,
  }),
  actions: {
    async login(email, password) {
      try {
        const response = await axios.post(
          'https://kahvi-back-mgf7.onrender.com/api/login/',
          {
            email,
            password,
          },
        )
        this.isAuthenticated = true
        this.token = response.data.token
        this.usuario = response.data.usuario || null
        this.error = null
      } catch (error) {
        this.isAuthenticated = false
        this.token = null
        this.usuario = null
        this.error = error.response?.data?.error || 'Erro ao fazer login'
      }
    },
  },
})