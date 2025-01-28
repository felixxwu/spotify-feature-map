import { styled } from 'goober'
import { colors } from '../utils/colors.ts'
import { useLoadingWithMinTimeout } from '../utils/useLoadingWithMinTimeout.ts'
import { LoadingCircle } from './LoadingCircle.tsx'

export function Button<T>({
  label,
  onClick,
  disabled = false,
  timeout,
}: {
  label: string
  onClick: () => T | Promise<T>
  disabled?: boolean
  timeout?: number
}) {
  const { loading, handler } = useLoadingWithMinTimeout(onClick, timeout)

  return (
    <Container onClick={handler} disabled={disabled}>
      {loading ? <LoadingCircle color={colors.bg1} /> : label}
    </Container>
  )
}

const Container = styled('button')<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  padding: 10px;
  background-color: ${colors.accent};
  border: none;
  color: ${colors.bg1};
  cursor: pointer;
  transition: 0.3s;
  border-radius: 100vw;

  ${props =>
    props.disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
  `}

  &:hover {
    background-color: white;
    color: black;
  }
`
