import { styled } from 'goober'
import { useState } from 'preact/hooks'
import { colors } from '../utils/colors.ts'

export function Button<T>({
  label,
  onClick,
  disabled = false,
}: {
  label: string
  onClick: () => T | Promise<T>
  disabled?: boolean
}) {
  const [loading, setLoading] = useState(false)

  const handler = async () => {
    setLoading(true)
    await onClick()
    setLoading(false)
  }

  return (
    <Container onClick={handler} disabled={disabled}>
      {loading ? 'loading...' : label}
    </Container>
  )
}

const Container = styled('button')<{ disabled: boolean }>`
  width: 150px;
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
