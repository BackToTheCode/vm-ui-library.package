/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { FullContainer } from '../../elements/container/index';
import {
  setup as makerSetup,
  authenticate as makerAuthenticate,
  getWeb3 as makerGetWeb3
} from '../../../utils/web3';
import Loading from '../../elements/loading/loading';
import VaultBuilder from '../vault-maker';
import Wallet from './wallet';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import ledgerLogo from '../../../public/images/ledger-logo.png';
import trezorLogo from '../../../public/images/trezor-logo.png';

export interface IHeroProps {
  variant?: string;
  children?: React.ReactNode;
}

type Hero = {
  Wrapped?: any;
};

const Hero: React.FC<IHeroProps> & Hero = (props: any) => {
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

  const renderProgress = () => (
    <div></div>
  );

  const renderWallet = (
    isConnected: boolean,
    isLoading: boolean,
    handleMetamask: (e: any) => Promise<void>
  ) =>
    !isConnected &&
    (isLoading ? (
      <Loading />
    ) : (
      <Wallet>
        <Wallet.Header>Start Making a Vault</Wallet.Header>
        <Wallet.SubHeader>Connect to the Ethereum network</Wallet.SubHeader>
        <Wallet.Button icon={metamaskLogo} onClick={handleMetamask}>
          Connect with Metamask
        </Wallet.Button>
        <Wallet.Button icon={trezorLogo} isDisabled>
          Trezor - coming soon...
        </Wallet.Button>
        <Wallet.Button icon={ledgerLogo} isDisabled>
          Ledger Blue - coming soon...
        </Wallet.Button>
      </Wallet>
    ));

  const renderVaultBuilder = (isConnected: boolean) => {
    return (isConnected && <VaultBuilder />);
  }
    
  return (
    <FullContainer variant="container.default">
      {isConnected ? renderProgress() : null}
      {renderWallet(isConnected, isLoading, handleMetamask)}
      {renderVaultBuilder(isConnected)}
    </FullContainer>
  );
};

export default Hero;
