/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { FullContainer } from '../../elements/container/index';
import {
  setup as makerSetup,
  authenticate as makerAuthenticate,
  getWeb3 as makerGetWeb3,
  REP, BAT, ETH
} from '../../../utils/web3';
import { USD_BAT, USD_REP } from '../../../constants/coin-prices';
import Loading from '../../elements/loading/loading';
import VaultBuilder from '../vault-maker/wrapped';
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
  let maker: any;

  const getBalances = async () => {

      const tokenService = maker.service('token');
      const eth = tokenService.getToken(ETH);
      const rep = tokenService.getToken(REP);
      const bat = tokenService.getToken(BAT);
      const ethBal = await eth.balance();
      const repBal = await rep.balance();
      const batBal = await bat.balance();
      return {
        eth: ethBal.toNumber(),
        rep: repBal.toNumber(),
        bat: batBal.toNumber()
      }
  }

  const getAccounts = async () => {
    await makerSetup();
    const web3 = (await makerGetWeb3()) as any;

    if (web3) {
      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];
      
      return userAccount;
    }
  };

  const getMaxToken = (currencies: any[]) => {
    const balances = currencies.map(currency => currency.bal);

    const maxIndex = balances.indexOf(Math.max(...balances));
    return currencies[maxIndex];
  }

  const selectDefaultCollateral = async (balances: any) => {
    const price = maker.service('price');
    const ethCurrencyRatio = await price.getEthPrice();
    const ethPrice = ethCurrencyRatio.toBigNumber().toNumber();
    const batPrice = USD_BAT;
    const repPrice = USD_REP;

    const tokens = {
      eth: {
        name: 'ETH',
        bal: ethPrice * balances.eth,
        price: ethPrice
      },
      rep: {
        name: 'REP',
        bal: repPrice * balances.rep,
        price: repPrice
      },
      bat: {
        name: 'BAT',
        bal: batPrice * balances.bat,
        price: batPrice
      }
    }

    const tokenList = [{
      name: 'ETH',
      bal: ethPrice * balances.eth,
      price: ethPrice
    },{
      name: 'BAT',
      bal: batPrice * balances.bat,
      price: batPrice
    },{
      name: 'REP',
      bal: repPrice * balances.rep,
      price: repPrice
    }]

    const maxBalToken = getMaxToken(tokenList)

    return [maxBalToken, tokens];
  }

  const handleMetamask = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    await makerSetup();
    maker = await makerAuthenticate();
    const userAccount = await getAccounts();
    const simpleBalances = await getBalances();
    const [defaultToken, balances] = await selectDefaultCollateral(simpleBalances);
    props.dispatchConnect({ address: userAccount });
    props.dispatchSetBalances(balances);
    props.dispatchSetCollateral(defaultToken.name);

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
    return (isConnected && <VaultBuilder.Wrapped />);
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
