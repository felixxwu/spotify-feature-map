import { styled } from 'goober'
import { SemiCircle } from './Icons.tsx'

export function LoadingCircle({ color }: { color?: string }) {
  return <SemiCircle container={Container} color={color} size={20} />
}

export const rotationLength = 700

const Container = styled('svg')`
  animation: rotate ${rotationLength}ms linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
