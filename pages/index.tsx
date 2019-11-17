import React from 'react';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/blocks/header/index';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import Hero from '../components/blocks/hero/index';

export default () => (
  <ThemeProvider theme={appTheme}>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <Header variant={'indicator.unconnected'} />
    <Hero /> 
  </ThemeProvider>
);

