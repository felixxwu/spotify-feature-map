import { accessToken, tokenExpires } from './signals.ts'
import { refresh } from '../api/refresh.ts'

export async function getAuthToken() {
  if (tokenExpires.value && Date.now() > tokenExpires.value) {
    await refresh()
    console.log(`accessToken.value`, accessToken.value)
    return accessToken.value
  }

  if (accessToken.value) return accessToken.value

  return null
}
