import buttons from './button-variants';
import variants from './general-variants';
import text from './text-variants';

const theme = {
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
    midGrey: '#7a7b86',
    lightGrey: '#e4e4e4',
    superLightGrey: '#f5f5f5',
    primary: '#1AAB9B',
    lightPrimary: 'rgb(89, 188, 175)',
    secondary: '#F4B731',
    transparent: 'transparent', 
    lightWarning: '#ffbf00',
    warning: '#ff0000'
  },
  fontSizes: [10, 14, 18, 26, 34, 48, 64],
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
    body: 1.45,
    heading: 1.25
  },
  borderWidths: {
    default: 2
  },
  variants: variants,
  text: text,
  buttons: buttons
};

// aliases
theme.fontSizes.body = theme.fontSizes[2]
theme.fontSizes.display = theme.fontSizes[5]

export default theme;