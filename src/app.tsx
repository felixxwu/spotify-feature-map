import { styled } from 'goober'
import { clientID, clientSecret, count } from './signals.ts'

export function App() {
  const handleRequest = async () => {
    const result = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientID.value}&client_secret=${clientSecret.value}`,
    })
    const data = await result.json()
    console.log(`data`, data)
  }

  return (
    <Container onClick={() => count.value++}>
      <div>hello {count.value}</div>
      <div>
        <Input
          type='text'
          value={clientID.value}
          onInput={e => (clientID.value = e.currentTarget.value)}
        />
        <Input
          type='text'
          value={clientSecret.value}
          onInput={e => (clientSecret.value = e.currentTarget.value)}
        />
      </div>
      <div>
        <Button onClick={handleRequest}>Request</Button>
      </div>
    </Container>
  )
}

const Container = styled('div')`
  width: 100vw;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Input = styled('input')`
  padding: 10px;
  margin: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
`

const Button = styled('button')`
  padding: 10px;
  margin: 10px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
  }
`
