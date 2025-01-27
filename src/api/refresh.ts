import { clientID, refreshToken } from '../utils/signals.ts'
import { saveTokenCallbackResponse } from './saveTokenCallbackResponse.ts'

export async function refresh() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      client_id: clientID.value,
      grant_type: 'refresh_token',
      refresh_token: refreshToken.value ?? '',
    }),
  })

  const data = await response.json()
  saveTokenCallbackResponse(data)
}
