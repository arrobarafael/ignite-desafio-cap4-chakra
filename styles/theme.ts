import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      hightlight: '#FFBA08',
    },
    dark: {
      black: '#000000',
      headingAndText: '#47585B',
      info: '#999999',
    },
    light: {
      white: '#fff',
      headingAndText: '#F5F8FA',
      info: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'light.headingAndText',
        color: 'dark.headingAndText',
      },
    },
  },
});
