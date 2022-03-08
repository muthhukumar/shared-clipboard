import * as React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="container w-full max-w-5xl px-4 mx-auto md:px-6">{children}</div>
}
