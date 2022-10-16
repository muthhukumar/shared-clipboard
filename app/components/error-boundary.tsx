import type { ErrorBoundaryComponent } from '@remix-run/node'

import Page500 from './500'

const ErrorBoundary: ErrorBoundaryComponent = () => {
  return <Page500 />
}

export default ErrorBoundary
