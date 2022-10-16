import * as React from 'react'
import { useCatch } from '@remix-run/react'

import Page400 from './400'
import Page500 from './500'

// TODO: remove any props
const CatchBoundary = (props: { children: React.ReactNode }) => {
  const caught = useCatch()
  let page = (
    <Page400
      statusCode={caught.status}
      message={caught.data?.message}
      description={caught.data?.description}
      children={props.children}
    />
  )

  if (caught.status === 500) {
    page = <Page500 />
  }

  return <>{page}</>
}

export default CatchBoundary
