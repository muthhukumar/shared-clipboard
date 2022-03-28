import * as React from 'react'

import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { useCatch } from 'remix'

import Page400 from './400'
import Page500 from './500'

const CatchBoundary: CatchBoundaryComponent = ({ children }: { children?: React.ReactNode }) => {
  const caught = useCatch()
  let page = (
    <Page400
      statusCode={caught.status}
      message={caught.data?.message}
      description={caught.data?.description}
      children={children}
    />
  )

  if (caught.status === 500) {
    page = <Page500 />
  }

  return <>{page}</>
}

export default CatchBoundary
