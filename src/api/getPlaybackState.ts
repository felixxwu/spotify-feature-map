import { get } from './get.ts'
import { currentArtists, currentTrack, playbackDevice } from '../utils/signals.ts'

export async function getPlaybackState() {
  const { data, error } = await get('me/player')

  if (error) {
    console.error(error)
    return
  }

  const state = (await data?.json()) as {
    device: { name: string }
    item: {
      name: string
      artists: { name: string }[]
    }
  }

  currentTrack.value = state.item.name
  currentArtists.value = state.item.artists.map(x => x.name).join(', ')
  playbackDevice.value = state.device.name
}
