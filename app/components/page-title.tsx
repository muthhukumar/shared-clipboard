import { useColorModeValue } from '@chakra-ui/react'
import clsx from 'clsx'
import * as React from 'react'
import { Wrapper } from '.'

export default function PageTitle({ children }: { children: React.ReactNode }) {
  const bgColor = useColorModeValue('bg-white', 'bg-[color:var(--chakra-colors-brand-900)]')
  return (
    <div className={clsx('py-10 border-b', bgColor)}>
      <Wrapper>{children}</Wrapper>
    </div>
  )
}
