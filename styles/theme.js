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
    lightMidGrey: '#a3a3a3',
    lightGrey: '#e4e4e4',
    superLightGrey: '#f5f5f5',
    darkPrimary: '#0d8577',
    primary: '#1AAB9B',
    lightPrimary: 'rgb(89, 188, 175)',
    superLightPrimary: 'rgb(216, 238, 235)',
    secondary: '#F4B731',
    lightSecondary: 'rgb(255, 225, 160)',
    superLightSecondary: 'rgb(253, 241, 217)',
    transparent: 'transparent', 
    lightWarning: '#ffbf00',
    warning: '#ff0000',
    ethMain: 'rgb(201, 157, 102)',
    repMain: 'rgb(65, 36, 103)',
    batMain: 'rgb(234, 86, 19)'
  },
  fontSizes: [14, 16, 18, 24, 30, 40, 50],
  space: [0, 2, 4, 6, 8, 16, 20, 32, 64],
  radii: {
    default: 4
  },
  fontWeights: {
    body: 400,
    heading: 400,
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

theme.fontSizes.body = theme.fontSizes[2]
theme.fontSizes.title = theme.fontSizes[5]

export default theme;