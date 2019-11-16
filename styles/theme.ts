export default {
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;`,
    heading: `-apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;`
  },
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    dark: '#222222',
    grey: '#48495f',
    lightGrey: '#e4e4e4',
    primary: '#1AAB9B',
    secondary: '#F4B731',
    transparent: 'transparent',
    lightWarning: '#ffbf00',
    warning: '#ff0000'
  },
  fontSizes: [10, 14, 18, 24, 32, 48, 64],
  space: [0, 2, 4, 6, 8, 16, 20, 32],
  radii: {
    default: 4
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  borderWidths: {
    default: 2
  },
  variants: {
    indicator: {
      connected: { bg: 'primary' },
      unconnected: { bg: 'warning' },
      disconnected: { bg: 'lightWarning' }
    },
    container: {
      regular: {
        maxWidth: 1024
      },
      wide: {
        maxWidth: '100%'
      }
    }
  },
  text: {
    body: {
      small: {
        fontSize: 1,
        fontFamily: 'body',
        color: 'dark'

      },
      normal: {
        fontSize: 2,
        fontFamily: 'body',
        color: 'dark'
      },
      large: {
        fontSize: 3,
        fontFamily: 'body',
        color: 'dark'
      }
    },
    heading: {
      normal: {
        fontSize: 4,
        fontFamily: 'heading'
      },
      large: {
        fontSize: 5,
        fontFamily: 'heading'
      }
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'primary'
    },
    secondary: {
      color: 'white',
      bg: 'secondary',
      borderWidth: 2,
      borderStyle: 'solid',
      borderColor: 'secondary'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      borderColor: 'primary',
      borderStyle: 'solid',
      borderWidth: 2
    }
  }
};
