import * as React from 'react'
import clsx from 'clsx'

export default function ErrorMessage({
  children,
  className,
}: {
  children: React.ReactNode | string | undefined | null
  className?: string | undefined
}) {
  return children ? (
    <p className={clsx('mt-2 text-sm text-red-500', className)}>{children}</p>
  ) : null
}
