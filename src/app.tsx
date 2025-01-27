import { styled } from 'goober'
import { page, pages } from './utils/signals.ts'

export function App() {
  return <Container>{pages[page.value]()}</Container>
}

const Container = styled('div')`
  width: 100vw;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
