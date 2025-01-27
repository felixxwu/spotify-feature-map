import { call } from './call.ts'

export async function skipToNext() {
  return await call('me/player/next')
}
