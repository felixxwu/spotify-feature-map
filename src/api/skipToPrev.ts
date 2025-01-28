import { call } from './call.ts'

export async function skipToPrev() {
  return await call('me/player/previous', 'POST')
}
