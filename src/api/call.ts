import { tryPromise } from '../utils/tryPromise.ts'
import { getAuthToken } from '../utils/getAuthToken.ts'

export async function call(endpoint: string) {
  return await tryPromise(
    fetch('https://api.spotify.com/v1/' + endpoint, {
      method: 'POST',
      headers: { Authorization: `Bearer ${await getAuthToken()}` },
    })
  )
}
