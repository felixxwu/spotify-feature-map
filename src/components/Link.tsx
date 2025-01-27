import { styled } from 'goober'
import { colors } from '../utils/colors.ts'

export function Link({ label, url }: { label: string; url: string }) {
  return (
    <Container href={url} target='_blank' rel='noreferrer'>
      {label}
    </Container>
  )
}

const Container = styled('a')`
  color: ${colors.accent};

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: white;
  }
`
