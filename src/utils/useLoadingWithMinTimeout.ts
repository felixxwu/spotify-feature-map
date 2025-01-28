import { useState } from 'preact/hooks'
import { sleep } from './sleep.ts'

export function useLoadingWithMinTimeout<T>(onClick?: () => T | Promise<T>, timeout = 150) {
  const [loading, setLoading] = useState(false)

  const handler = async () => {
    if (!onClick) return
    setLoading(true)
    await sleep(timeout)
    try {
      await onClick()
    } finally {
      setLoading(false)
    }
  }

  return { handler, loading }
}
