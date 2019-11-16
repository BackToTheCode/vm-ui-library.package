import React from 'react';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/blocks/header/index';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

export default () => (
  <ThemeProvider theme={appTheme}>
    <Global
      styles={theme =>
        css`
          ${emotionNormalize},
          html {
            font-size: ${theme.global.fontSize};
            font-family: ${theme.global.fontFamily};
          }
        `
      }
    />
    <Header />
  </ThemeProvider>
);
