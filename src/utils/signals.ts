import { signal } from '@preact/signals'
import { signalWithLocalStorage } from './signalWithLocalStorage.ts'
import { Home } from '../pages/Home.tsx'
import { Init } from '../pages/Init.tsx'
import { ClientIDTutorial } from '../pages/ClientIDTutorial.tsx'

export const pages = {
  Init,
  Home,
  ClientIDTutorial,
}

export const clientID = signalWithLocalStorage('', 'clientID')
export const refreshToken = signalWithLocalStorage<string | null>(null, 'refreshToken')
export const accessToken = signalWithLocalStorage<string | null>(null, 'accessToken')
export const tokenExpires = signalWithLocalStorage<number | null>(null, 'tokenExpires')
export const codeVerifier = signalWithLocalStorage<string | null>(null, 'codeVerifier')
export const page = signal<keyof typeof pages>(accessToken.value ? 'Home' : 'Init')
