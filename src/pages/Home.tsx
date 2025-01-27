import { Button } from '../components/Button.tsx'
import { skipToNext } from '../api/skipToNext.ts'
import { styled } from 'goober'
import { refresh } from '../api/refresh.ts'
import { logout } from '../api/logout.ts'

export function Home() {
  return (
    <Container>
      <Button label='Next' onClick={skipToNext} />
      <Button label='Refresh' onClick={refresh} />
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
