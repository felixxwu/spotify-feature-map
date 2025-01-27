import { clientID } from '../utils/signals.ts'
import { TextInput } from '../components/TextInput.tsx'
import { Link } from '../components/Link.tsx'
import { styled } from 'goober'
import { Button } from '../components/Button.tsx'
import { login } from '../api/login.ts'
import { useReadAuthCallback } from '../api/useReadAuthCallback.ts'

export function APILink() {
  useReadAuthCallback()

  return (
    <Container>
      <div>
        Find your Spotify Client ID in the{' '}
        <Link label='Spotify Dashboard' url='https://developer.spotify.com/dashboard' />
      </div>
      <TextInput signal={clientID} placeholder='Client ID' />
      <Button label='Connect' onClick={login} disabled={!clientID.value} />
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`
