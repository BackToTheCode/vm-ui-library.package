import React from 'react';
import Button from '../components/elements/button/button';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/blocks/header/index'

export default () => (
  <ThemeProvider theme={appTheme}>
    <Header />
    <Button>I'm a button</Button>
  </ThemeProvider>
);
