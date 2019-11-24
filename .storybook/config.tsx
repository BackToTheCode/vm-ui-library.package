import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { themes as storyBookThemes } from '@storybook/theming';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  options: {
    theme: storyBookThemes.light,
    isFullScreen: true,
    name: 'Vault Maker',
    url: 'https://github.com/BackToTheCode/project.mcd-vault-manager',

  }
});

// Themes for app UI components
addDecorator((storyFn: any) => (
  <ThemeProvider theme={appTheme}>{storyFn()}</ThemeProvider>
));

configure(require.context('../components', true, /\.stories.tsx$/), module);
