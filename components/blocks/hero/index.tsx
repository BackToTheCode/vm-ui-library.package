/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import Container from '../../elements/container/index';
import {
  setup as makerSetup,
  authenticate as makerAuthenticate,
  getWeb3 as makerGetWeb3
} from '../../../utils/web3';
import Loading from '../../elements/loading/loading';
import VaultBuilder from '../vault-maker';
import Wallet from './wallet';

export interface IHeroProps {
  variant?: string;
  children?: React.ReactNode;
}

type THero = {
  Wrapped?: any;
};

const baseStyle = { justifyContent: 'center', alignItems: 'center' }

const Hero: React.FC<IHeroProps> & THero = (props: any) => {
  const [isLoading, setLoading] = useState(false);
  const { connected: isConnected } = props;

  const getAccounts = async () => {
    await makerSetup();
    const web3 = (await makerGetWeb3()) as any;
    if (web3) {
      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];

      return userAccount;
    }
  };

  const handleMetamask = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await makerSetup();
    await makerAuthenticate();
    const userAccount = await getAccounts();
    props.dispatchConnect({ address: userAccount });
    setLoading(false);
  };

  const renderWallet = (
    isConnected: boolean,
    isLoading: boolean,
    handleMetamask: (e: any) => Promise<void>
  ) =>
    !isConnected &&
    (isLoading ? <Loading /> : <Wallet handleMetamask={handleMetamask} />);

  const renderVaultBuilder = (isConnected: boolean) => isConnected && <VaultBuilder />;

  return (
    <Container
      style={baseStyle}
      variant="container.regularTall"
    >
      {renderWallet(isConnected, isLoading, handleMetamask)}
      {renderVaultBuilder(isConnected)}

    </Container>
  );
};

export default Hero;
