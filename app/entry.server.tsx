import type { EntryContext } from '@remix-run/node'

import { RemixServer } from '@remix-run/react'
import { renderToPipeableStream, renderToString } from 'react-dom/server'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

import { ServerStyleContext } from '~/utils/context'
import createEmotionCache from '~/utils/createEmotionCache'

import { Response } from '@remix-run/node'

import isbot from 'isbot'
import { PassThrough } from 'stream'

const ABORT_DELAY = 5000

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  const callbackName = isbot(request.headers.get('user-agent')) ? 'onAllReady' : 'onShellReady'
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  return new Promise((resolve, reject) => {
    let didError = false

    const html = renderToString(
      <ServerStyleContext.Provider value={null}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </CacheProvider>
      </ServerStyleContext.Provider>,
    )

    const chunks = extractCriticalToChunks(html)

    const { pipe, abort } = renderToPipeableStream(
      <ServerStyleContext.Provider value={chunks.styles}>
        <CacheProvider value={cache}>
          <RemixServer context={remixContext} url={request.url} />,
        </CacheProvider>
      </ServerStyleContext.Provider>,
      {
        [callbackName]: () => {
          const body = new PassThrough()

          responseHeaders.set('Content-Type', 'text/html')

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            }),
          )

          pipe(body)
        },
        onShellError: (err: unknown) => {
          reject(err)
        },
        onError: (error: unknown) => {
          didError = true

          console.error(error)
        },
      },
    )

    setTimeout(abort, ABORT_DELAY)
  })
}
