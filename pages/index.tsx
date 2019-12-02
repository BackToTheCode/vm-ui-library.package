import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider, withTheme } from 'emotion-theming';
import React from 'react';
import { Header } from '../components/blocks/header/wrapped';
import { Hero } from '../components/blocks/hero/wrapped';
import { Progress } from '../components/blocks/progress';
import { Context } from '../components/context';
import steps, {
  COMPLETE_VAULT,
  CONFIRM_COLLATERAL_NUM,
  CONFIRM_VAULT_NUM,
  DRAW_DAI_NUM,
  LOCK_COLLATERAL_NUM,
  OPEN_VAULT_NUM
} from '../constants/step-names';
import logoImage from '../public/images/mark-maker.svg';
import { rootReducer, useStore } from '../store/store';
import appTheme from '../styles/theme';

const Provider = Context.Provider;

export default () => {
  const [state, dispatch] = useStore(rootReducer) as any;
  const { isConnected } = state.connection;
  const isComplete = state.vault.step === steps[COMPLETE_VAULT];

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
        {renderProgressBar(state, isComplete, isConnected)}
        {renderHero(isComplete)}
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

const renderProgressBar = (
  state: any,
  isComplete: boolean,
  isConnected: boolean
) => {
  const { step } = state.vault;
  return (
    isConnected &&
    !isComplete && (
      <Progress>
        <Progress.Step complete={step >= CONFIRM_COLLATERAL_NUM} />
        <Progress.Step complete={step >= LOCK_COLLATERAL_NUM} />
        <Progress.Step complete={step >= DRAW_DAI_NUM} />
        <Progress.Step complete={step >= CONFIRM_VAULT_NUM} />
        <Progress.Step complete={step >= OPEN_VAULT_NUM} />
      </Progress>
    )
  );
};

const renderHero = (isComplete: boolean) => (
  <Hero.Wrapped isComplete={isComplete} />
);
