// stores/counter.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { 
        authModel:[] 
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    login() {
      this.count++
    },
  },
})