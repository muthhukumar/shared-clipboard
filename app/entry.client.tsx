import React, { useState } from 'react'
import { startTransition, StrictMode } from 'react'
import { RemixBrowser } from '@remix-run/react'
import { hydrateRoot } from 'react-dom/client'
import { CacheProvider } from '@emotion/react'

import { ClientStyleContext } from '~/utils/context'
import createEmotionCache from '~/utils/createEmotionCache'

interface ClientCacheProviderProps {
  children: React.ReactNode
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache())

  function reset() {
    setCache(createEmotionCache())
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

const hydrate = () => {
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <ClientCacheProvider>
          <RemixBrowser />
        </ClientCacheProvider>
      </StrictMode>,
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1)
}
