import { clientID, codeVerifier } from '../utils/signals.ts'

export async function login() {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const randomValues = crypto.getRandomValues(new Uint8Array(64))
  const code_verifier = randomValues.reduce((acc, x) => acc + possible[x % possible.length], '')
  const data = new TextEncoder().encode(code_verifier)
  const hashed = await crypto.subtle.digest('SHA-256', data)

  const code_challenge_base64 = btoa(String.fromCharCode(...new Uint8Array(hashed)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')

  codeVerifier.value = code_verifier

  const scopes = [
    'user-read-private',
    'user-read-email',
    'user-modify-playback-state',
    'user-read-playback-state',
  ]

  const authUrl = new URL('https://accounts.spotify.com/authorize')
  const params = {
    response_type: 'code',
    client_id: clientID.value,
    scope: scopes.join(' '),
    code_challenge_method: 'S256',
    code_challenge: code_challenge_base64,
    redirect_uri: window.location.origin,
  }

  authUrl.search = new URLSearchParams(params).toString()
  // Redirect the user to the authorization server for login
  window.location.href = authUrl.toString()
}
