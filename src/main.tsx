import { h, render } from 'preact'
import { App } from './app.tsx'
import { setup } from 'goober'
import 'preact/compat'

setup(h)

render(<App />, document.getElementById('app')!)
