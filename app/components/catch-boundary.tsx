import { CatchBoundaryComponent } from '@remix-run/react/routeModules'
import { useCatch } from 'remix'

import Page400 from './400'
import Page500 from './500'

const CatchBoundary: CatchBoundaryComponent = () => {
  const caught = useCatch()
  let page = (
    <Page400
      statusCode={caught.status}
      message={caught.data?.message}
      description={caught.data?.description}
    />
  )

  if (caught.status === 500) {
    page = <Page500 />
  }

  return <>{page}</>
}

export default CatchBoundary
