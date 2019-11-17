import React, { useReducer } from 'react';
import appTheme from '../styles/theme';
import { ThemeProvider } from 'emotion-theming';
import Header from '../components/blocks/header/index';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import Hero from '../components/blocks/hero/index';
import logoImage from '../public/images/mark-maker.svg';
import reducer, { initialState } from '../store/reducer';

export const Context = React.createContext(null);
const Provider = Context.Provider;

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderHeader = () => {
    return (
      <Header.Wrapped variant={'indicator.unconnected'}>
        <Header.Logo image={logoImage} />
        <Header.Address />
      </Header.Wrapped>
    );
  };

  const renderHero = () => (
    <Hero />
  );

  return (
    <ThemeProvider theme={appTheme}>
      <Global
        styles={css`
          ${emotionNormalize}
        `}
      />
      <Provider value={{state, dispatch}}>
        {renderHeader()}
        {renderHero()}
      </Provider>
    </ThemeProvider>
  );
};

// state = {
//   maker: 'false',
//   load: false,
// }
// handleMetamask = async () => {
//   this.setState({load: true})
//   maker = await connect()
//   getWeb3()
//   this.setState({ maker: true })
// }
