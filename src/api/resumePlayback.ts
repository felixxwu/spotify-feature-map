import { call } from './call.ts'

export async function resumePlayback() {
  return await call('me/player/play', 'PUT')
}
