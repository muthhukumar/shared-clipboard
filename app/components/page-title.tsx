import * as React from 'react'
import { Wrapper } from '.'

export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-10 border-b">
      <Wrapper>{children}</Wrapper>
    </div>
  )
}
