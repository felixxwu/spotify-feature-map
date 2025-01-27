import { Signal } from '@preact/signals'
import { styled } from 'goober'
import { colors } from '../utils/colors.ts'

export function TextInput({
  signal,
  placeholder,
  onInput,
}: {
  signal: Signal<string>
  placeholder?: string
  onInput?: (e: Event) => void
}) {
  return (
    <Container
      type='text'
      placeholder={placeholder}
      value={signal.value}
      onInput={e => {
        signal.value = e.currentTarget.value
        onInput?.(e)
      }}
    />
  )
}

const Container = styled('input')`
  padding: 10px 20px;
  background-color: ${colors.bg2};
  border: none;
  border-radius: 100vw;
  width: 300px;
`
