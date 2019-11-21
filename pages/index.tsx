import React, { useReducer } from 'react';
import appTheme from '../styles/theme';
import { withTheme, ThemeProvider } from 'emotion-theming';
import Header from '../components/blocks/header/wrapped';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import Hero from '../components/blocks/hero/wrapped';
import logoImage from '../public/images/mark-maker.svg';
import reducer, { initialState } from '../store/reducer';

export const Context = React.createContext(null);
const Provider = Context.Provider;

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderHeader = () => {
    return (
      <Header.Wrapped>
        <Header.Logo image={logoImage} />
        <Header.Address />
      </Header.Wrapped>
    );
  };

  const renderHero = () => <Hero.Wrapped />;

  const makeGlobalStyles = (theme: any) => css`
    ${emotionNormalize}
    body {
      background: ${theme.colors.superLightGrey};
    }
  `;

  const GlobalStyles = withTheme(({ theme }) => (
    <Global styles={makeGlobalStyles(theme)} />
  ));

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Provider value={{ state, dispatch }}>
        {renderHeader()}
        {renderHero()}
      </Provider>
    </ThemeProvider>
  );
};