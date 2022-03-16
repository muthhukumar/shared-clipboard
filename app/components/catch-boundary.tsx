import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { useCatch } from 'remix'

import Page400 from './400'
import Page500 from './500'

const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch()
  let page = <Page500 />

  if (caught.status === 404) {
    page = <Page400 statusCode={caught.status} message={caught.data?.message} />
  }

  return <>{page}</>
}

export default CatchBoundary
