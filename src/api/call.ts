import { tryPromise } from '../utils/tryPromise.ts'
import { getAuthToken } from '../utils/getAuthToken.ts'

export async function call(endpoint: string, method: 'POST' | 'GET' | 'PUT') {
  return await tryPromise(
    fetch('https://api.spotify.com/v1/' + endpoint, {
      method,
      headers: { Authorization: `Bearer ${await getAuthToken()}` },
    })
  )
}
