import * as React from 'react'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto h-full w-full max-w-5xl px-4 md:px-6">{children}</div>
}
