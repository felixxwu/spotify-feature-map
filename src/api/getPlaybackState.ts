import {
  albumImageUrl,
  currentArtists,
  currentTrack,
  isPlaying,
  playbackDevice,
  playbackDuration,
  playbackProgress,
  playbackTimestamp,
} from '../utils/signals.ts'
import { call } from './call.ts'

export async function getPlaybackState() {
  const { data, error } = await call('me/player', 'GET')

  if (error) {
    console.error(error)
    return
  }

  const state = (await data?.json()) as {
    is_playing: boolean
    device: { name: string }
    progress_ms: number
    item: {
      name: string
      artists: { name: string }[]
      album: {
        images: { url: string }[]
      }
      duration_ms: number
    }
  }

  currentTrack.value = state.item.name
  currentArtists.value = state.item.artists.map(x => x.name).join(', ')
  playbackDevice.value = state.device.name
  isPlaying.value = state.is_playing
  albumImageUrl.value = state.item.album.images[0].url
  playbackTimestamp.value = Date.now()
  playbackProgress.value = state.progress_ms
  playbackDuration.value = state.item.duration_ms
}
