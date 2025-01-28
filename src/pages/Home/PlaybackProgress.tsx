import { useEffect, useState } from 'preact/hooks'
import {
  isPlaying,
  playbackDuration,
  playbackProgress,
  playbackTimestamp,
} from '../../utils/signals.ts'
import { convertToReadableTime } from '../../utils/convertToReadableTime.ts'

export function PlaybackProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(
        playbackProgress.value + (isPlaying.value ? Date.now() - playbackTimestamp.value : 0)
      )
    }, 100)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      {convertToReadableTime(progress)} / {convertToReadableTime(playbackDuration.value)}
    </div>
  )
}
