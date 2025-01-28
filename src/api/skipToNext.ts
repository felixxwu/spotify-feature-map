import { post } from './post.ts'

export async function skipToNext() {
  return await post('me/player/next')
}
