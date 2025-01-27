import { useEffect } from 'preact/hooks'
import { clientID, codeVerifier } from '../utils/signals.ts'
import { saveTokenCallbackResponse } from './saveTokenCallbackResponse.ts'

export function useReadAuthCallback() {
  useEffect(() => {
    ;(async () => {
      async function getToken(code: string) {
        const response = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            client_id: clientID.value,
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: window.location.origin,
            code_verifier: codeVerifier.value ?? '',
          }),
        })

        return await response.json()
      }

      // On page load, try to fetch auth code from current browser search URL
      const args = new URLSearchParams(window.location.search)
      const code = args.get('code')

      // If we find a code, we're in a callback, do a token exchange
      if (code) {
        const response = await getToken(code)
        saveTokenCallbackResponse(response)

        // Remove code from URL so we can refresh correctly.
        const url = new URL(window.location.origin)
        url.searchParams.delete('code')

        const updatedUrl = url.search ? url.href : url.href.replace('?', '')
        window.history.replaceState({}, document.title, updatedUrl)
        window.location.reload()
      }
    })()
  }, [])
}
