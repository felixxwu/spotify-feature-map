import { accessToken, refreshToken, tokenExpires } from '../utils/signals.ts'

export function saveTokenCallbackResponse(response: any) {
  if (!response) return
  if (response.access_token) accessToken.value = response.access_token
  if (response.refresh_token) refreshToken.value = response.refresh_token
  if (response.expires_in) tokenExpires.value = Date.now() + response.expires_in * 1000
}
