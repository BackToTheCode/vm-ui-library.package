import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes as storyBookThemes } from '@storybook/theming';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';

// Themes for storybook itself
const storyBookThemeParameters = {
  options: {
    theme: storyBookThemes.light
  }
};
addParameters(storyBookThemeParameters);

// Themes for app UI components
const ThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={appTheme}>{storyFn()}</ThemeProvider>
);
const FontDecorator = (storyFn: any) => (
  <div>
      <Global
        styles={theme =>
          css`
            html {
              font-size: ${theme.global.fontSize};
              font-family: ${theme.global.fontFamily};
            }
          `
        }
      />
    {storyFn()}
  </div>
);

addDecorator(FontDecorator);
addDecorator(ThemeDecorator);

configure(require.context('../components', true, /\.stories.tsx$/), module);
