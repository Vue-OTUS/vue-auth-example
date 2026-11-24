import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { jwtDecode } from 'jwt-decode'

type JwtPayload = {
  role: string
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  const jwtToken = ref(localStorage.getItem('jwt'))

  const isAuthed = computed<boolean>(() => !!jwtToken.value)

  const jwtPayload = computed<Partial<JwtPayload>>(() =>
    !jwtToken.value ? {} : jwtDecode<JwtPayload>(jwtToken.value),
  )

  const userName = computed(() => jwtPayload.value.name ?? 'Guest')
  const role = computed(() => jwtPayload.value.role ?? 'guest')

  function setJwt(newToken: string) {
    jwtToken.value = newToken
    localStorage.setItem('jwt', newToken)
  }

  function deleteJwt() {
    localStorage.removeItem('jwt')
    jwtToken.value = null
  }

  return { isAuthed, setJwt, deleteJwt, userName, role }
})
