import { call } from './call.ts'

export async function pausePlayback() {
  return await call('me/player/pause', 'PUT')
}
