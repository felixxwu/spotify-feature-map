import { Icon, IconProps, SemiCircle } from './Icons.tsx'
import { styled } from 'goober'
import { colors } from '../utils/colors.ts'
import { rotationLength } from './LoadingCircle.tsx'
import { useLoadingWithMinTimeout } from '../utils/useLoadingWithMinTimeout.ts'

export function IconButton<T>({
  icon,
  size = 36,
  color,
  onClick,
  timeout,
}: { icon: Icon; timeout?: number } & Omit<IconProps<T>, 'container'>) {
  const { loading, handler } = useLoadingWithMinTimeout(onClick, timeout)
  const Comp = loading ? SemiCircle : icon

  return (
    <RotationContainer loading={loading} height={size}>
      <Comp size={size} color={color} onClick={handler} container={Container} />
    </RotationContainer>
  )
}

const Container = styled('svg')`
  cursor: pointer;
  padding: 6px;
  border-radius: 50%;

  &:hover {
    background-color: ${colors.bg2};
  }
`

const RotationContainer = styled('div')<{ loading: boolean; height: number }>`
  pointer-events: ${props => (props.loading ? 'none' : 'auto')};
  height: ${props => props.height}px;

  & svg {
    animation: ${props => (props.loading ? `rotate ${rotationLength}ms linear infinite` : 'none')};
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
