import React, { useReducer } from 'react';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/blocks/header/index';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import Hero from '../components/blocks/hero/index';
import logoImage from '../public/images/mark-maker.svg';
import reducer, { initialState } from '../reducers/reducer';

export default (props: any) => {
  const [state] = useReducer(reducer, initialState);

  const renderHeader = (props: any, { variant }: any) => {
    return (
      <Header {...props} variant={'indicator.unconnected'}>
        <Header.Logo image={logoImage} />
        <Header.Address variant={variant} />
      </Header>
    );
  };

  const renderHero = (props: any) => <Hero {...props} />;

  return (
    <ThemeProvider theme={appTheme}>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      />
      {renderHeader(props, state)}
      {renderHero(props)}
    </ThemeProvider>
  );
};
