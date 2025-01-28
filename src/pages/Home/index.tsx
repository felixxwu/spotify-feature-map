import { Button } from '../../components/Button.tsx'
import { skipToNext } from '../../api/skipToNext.ts'
import { styled } from 'goober'
import { logout } from '../../api/logout.ts'
import { sleep } from '../../utils/sleep.ts'
import { useEffect } from 'preact/hooks'
import { getPlaybackState } from '../../api/getPlaybackState.ts'
import {
  albumImageUrl,
  currentArtists,
  currentTrack,
  isPlaying,
  playbackDevice,
} from '../../utils/signals.ts'
import { LoadingCircle } from '../../components/LoadingCircle.tsx'
import { IconButton } from '../../components/IconButton.tsx'
import { NextArrow, Pause, Play, PrevArrow } from '../../components/Icons.tsx'
import { resumePlayback } from '../../api/resumePlayback.ts'
import { pausePlayback } from '../../api/pausePlayback.ts'
import { PlaybackProgress } from './PlaybackProgress.tsx'
import { skipToPrev } from '../../api/skipToPrev.ts'

export function Home() {
  useEffect(() => {
    getPlaybackState().then()
    const interval = setInterval(getPlaybackState, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const handleNext = async () => {
    await skipToNext()
    await sleep(200)
    await getPlaybackState()
  }

  const handlePrev = async () => {
    await skipToPrev()
    await sleep(200)
    await getPlaybackState()
  }

  const handlePlayPause = async () => {
    if (isPlaying.value) {
      await pausePlayback()
    } else {
      await resumePlayback()
    }
    await sleep(200)
    await getPlaybackState()
  }

  return (
    <Container>
      {albumImageUrl.value && <Artwork src={albumImageUrl.value} alt='Album Art' />}
      {currentArtists.value && currentTrack.value ? (
        <>
          <div>
            {currentArtists.value} - {currentTrack.value}
          </div>
          <div>Playing on: {playbackDevice.value}</div>
        </>
      ) : (
        <LoadingCircle />
      )}
      <PlaybackProgress />
      <Controls>
        <IconButton icon={PrevArrow} size={36} onClick={handlePrev} />
        <IconButton icon={isPlaying.value ? Pause : Play} size={50} onClick={handlePlayPause} />
        <IconButton icon={NextArrow} size={36} onClick={handleNext} />
      </Controls>
      <Button label='Logout' onClick={logout} />
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
`

const Controls = styled('div')`
  display: flex;
  align-items: center;
`

const Artwork = styled('img')`
  width: 150px;
`
