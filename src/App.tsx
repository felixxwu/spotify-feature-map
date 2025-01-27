import { styled } from 'goober'
import { count } from './signals.ts'

export function App() {
  return <Container onClick={() => count.value++}>hello {count.value}</Container>
}

const Container = styled('div')`
  width: 100vw;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`
