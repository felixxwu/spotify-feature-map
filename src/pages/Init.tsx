import { clientID, page } from '../utils/signals.ts'
import { styled } from 'goober'
import { Button } from '../components/Button.tsx'
import { login } from '../api/login.ts'
import { useReadAuthCallback } from '../api/useReadAuthCallback.ts'
import { LoadingCircle } from '../components/LoadingCircle.tsx'

export function Init() {
  useReadAuthCallback()

  const args = new URLSearchParams(window.location.search)
  const code = args.get('code')

  if (code) {
    return <LoadingCircle />
  }

  const handleConnect = async () => {
    clientID.value = 'e1945a0d216041f2b06413c907986d82'
    await login()
  }

  return (
    <Container>
      <div>
        Connect using the communal Client ID
        <br />
        (Rate limit is shared across all users of this ID)
      </div>
      <Button label='Connect' onClick={handleConnect} />

      <DividerRow>
        <HLine />
        <OR>or</OR>
        <HLine />
      </DividerRow>

      <div>
        Connect using your own Client ID
        <br />
        (Rate limit will apply only to you - setup required)
      </div>
      <Button label='Next' onClick={() => (page.value = 'ClientIDTutorial')} />
    </Container>
  )
}

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 400px;
  text-align: center;
`

const DividerRow = styled('div')`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`

const OR = styled('div')`
  margin-top: -4px;
  width: 40px;
`

const HLine = styled('div')`
  width: 100%;
  height: 1px;
  background-color: white;
`
