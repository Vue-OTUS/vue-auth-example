import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'
import { jwtDecode } from 'jwt-decode'

export const useAuthStore = defineStore('auth', () => {
  const jwtStr = shallowRef(localStorage.getItem('jwt'))

  const isAuthed = computed(() => !!jwtStr.value)

  const decodedJwt = computed(() => {
    if (isAuthed.value) {
      return jwtDecode<{ role: string; name: string }>(jwtStr.value as string)
    } else {
      return null
    }
  })

  const role = computed(() => decodedJwt.value?.role)
  const name = computed(() => decodedJwt.value?.name)

  function setJwt(jwt: string) {
    jwtStr.value = jwt
    localStorage.setItem('jwt', jwt)
  }

  function logout() {
    jwtStr.value = null
    localStorage.removeItem('jwt')
  }

  return { isAuthed, setJwt, logout, role, name }
})
