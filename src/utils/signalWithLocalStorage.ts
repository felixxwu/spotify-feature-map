import { signal } from '@preact/signals'

export function signalWithLocalStorage<T>(init: T, name: string) {
  const value = localStorage.getItem(name)
  const sig = signal<T>(value ? JSON.parse(value) : init)
  sig.subscribe(value => localStorage.setItem(name, JSON.stringify(value)))
  return sig
}
