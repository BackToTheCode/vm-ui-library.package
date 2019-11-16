const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading'
};

export default {
  global: {
    fontSize: '.625rem'
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;`,
    heading: 'Georgia, serif'
  },
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    text: '#000',
    primary: '#1AAB9B',
    secondary: '#F4B731',
    transparent: 'transparent'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
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
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      ...heading,
      fontSize: 5
    },
    h2: {
      ...heading,
      fontSize: 4
    },
    h3: {
      ...heading,
      fontSize: 3
    },
    h4: {
      ...heading,
      fontSize: 2
    },
    h5: {
      ...heading,
      fontSize: 1
    },
    h6: {
      ...heading,
      fontSize: 0
    }
  },
  container: {
    regular: {
      maxWidth: 1024,
    },
    wide: {
      maxWidth: '100%'
    }
  },
  variants: {
    container: {
      regular: {
        maxWidth: 1024
      },
      wide: {
        maxWidth: '100%'
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
