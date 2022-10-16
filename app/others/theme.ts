import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {
    brand: {
      lightWhite: '#fafafa',
      100: '#111',
      900: '#000',
    },
  },
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        fontFamily: 'body',
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('brand.lightWhite', 'brand.100')(props),
      },
    }),
  },
})
