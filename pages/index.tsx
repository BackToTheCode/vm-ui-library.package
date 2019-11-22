//import React, { useReducer } from 'react';
import React from 'react';
import appTheme from '../styles/theme';
import { withTheme, ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

import Header from '../components/blocks/header/wrapped';
import Hero from '../components/blocks/hero/wrapped';
import Progress from '../components/blocks/progress'
import logoImage from '../public/images/mark-maker.svg';  
import { useStore, rootReducer } from '../store/store'; 
// import { initialState } from '../store/reducers/reducer';

export const Context = React.createContext(null);
const Provider = Context.Provider;

export default () => {

  const [ state, dispatch] = useStore(rootReducer, {});
  const { isConnected } = state as any;

  console.log('state', state);

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
        {isConnected && renderProgressBar()}
        {renderHero()}
      </Provider>
    </ThemeProvider>
  );
};

// Section renderers
const renderHeader = () => {
  return (
    <Header.Wrapped>
      <Header.Logo image={logoImage} />
      <Header.Address />
    </Header.Wrapped>
  );
};

const renderProgressBar = () => {
  return (
      <Progress>
        <Progress.Step complete></Progress.Step>
        <Progress.Step></Progress.Step>
        <Progress.Step></Progress.Step>
        <Progress.Step></Progress.Step>
        <Progress.Step></Progress.Step>
        <Progress.Step></Progress.Step>
      </Progress>
  )
}

const renderHero = () => <Hero.Wrapped />;