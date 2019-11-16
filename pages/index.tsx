import React from 'react';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/blocks/header/index';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

export default () => (
  <ThemeProvider theme={appTheme}>
    <Global
      styles={css`
        ${emotionNormalize}
      `}
    />
    <Header variant={'indicator.connected'} address='0x61049F5e03Bfe3823f274C479158A94bcA26456c' ern='james.eth' />
  </ThemeProvider>
);

