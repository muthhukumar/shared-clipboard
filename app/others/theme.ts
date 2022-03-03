import { extendTheme } from '@chakra-ui/react'

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
})
