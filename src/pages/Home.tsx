import { Button } from '../components/Button.tsx'
import { skipToNext } from '../api/skipToNext.ts'
import { styled } from 'goober'
import { logout } from '../api/logout.ts'
import { sleep } from '../utils/sleep.ts'
import { useEffect } from 'preact/hooks'
import { getPlaybackState } from '../api/getPlaybackState.ts'
import { currentArtists, currentTrack, playbackDevice } from '../utils/signals.ts'
import { LoadingCircle } from '../components/LoadingCircle.tsx'

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

  return (
    <Container>
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
      <Button label='Next' onClick={handleNext} timeout={0} />
      <Button label='Logout' onClick={logout} />
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
