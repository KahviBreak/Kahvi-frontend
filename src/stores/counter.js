import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useCouterStore = defineStore('counter', {
  state: () => ({
    email: '',
    isAuthenticated: false,
    error: null
  }),
  actions: {
    async login(email, password) {
      this.error = null
      if (email === 'teste@kahvi.com' && password === '1234') {
        this.email = email
        this.isAuthenticated = true
      } else {
        this.email = ''
        this.isAuthenticated = false
        this.error = 'Email ou senha inválidos'
      }
    }
  }
})
