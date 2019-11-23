/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { FullContainer } from '../../elements/container/index';
import { setup as mkrSetup, getWeb3 as mkrGetWeb3 } from '../../../utils/web3';
import Loading from '../../elements/loading/loading';
import VaultBuilder from '../vault-maker/wrapped';
import Wallet from '../wallet';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import ledgerLogo from '../../../public/images/ledger-logo.png';
import trezorLogo from '../../../public/images/trezor-logo.png';
import uniqBy from 'lodash.uniqby';

export interface IHeroProps {
  variant?: string;
  children?: React.ReactNode;
}

type Hero = {
  Wrapped?: any;
};

const Hero: React.FC<IHeroProps> & Hero = (props: any) => {
  const [isLoading, setLoading] = useState(false);
  const { isConnected } = props;

  let maker: any = null;
  let web3: any = null;

  const addBalances = async (tokens: any[]) => {
    if (!maker) return;
    const tokenService = maker.service('token');

    const clonedTokens: any[] = tokens.map((token: any) => token);
    for (let [idx, token] of tokens.entries()) {
      const tokenFromService = tokenService.getToken(token.symbol);
      const tokenBalance = await tokenFromService.balance();
      clonedTokens[idx].balance = tokenBalance.toNumber();
      clonedTokens[idx].usdValue = tokenBalance.toNumber() * token.price;
    }

    return clonedTokens;
  };

  const getTokens = async () => {
    if (!maker) return;
    const { cdpTypes } = maker.service('mcd:cdpType');
    const uniqCdpTypes = uniqBy(cdpTypes, (cdpt: any) => cdpt.currency.symbol);

    const dict: any = {};
    const tokens = uniqCdpTypes.map((cdpType: any) => {
      const token = {
        symbol: cdpType.currency.symbol,
        price: cdpType.price.toBigNumber().toNumber()
      };
      return Object.assign(token, dict[token.symbol]);
    });

    return tokens;
  };

  const getAccount = async () => {
    if (!web3) return;
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    return userAccount;
  };

  const selectDefaultToken = (tokens: any[]) => {
    const usdValues = tokens.map(token => parseInt(token.usdValue));
    const maxIndex = usdValues.indexOf(Math.max(...usdValues));
    return tokens[maxIndex];
  };

  const setupMaker = async () => {
    maker = await mkrSetup(process.env.NETWORK, process.env.PROVIDER);
    web3 = (await mkrGetWeb3()) as any;
  };

  const handleMetamask = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await setupMaker();

    const userAccount = await getAccount();
    const tokens = await getTokens();
    const tokensWithBalances = await addBalances(tokens);
    const selectedToken = selectDefaultToken(tokensWithBalances);

    props.dispatchConnect({ address: userAccount });
    props.dispatchTokens({ tokens: tokensWithBalances });
    props.dispatchSelectToken({ selectedToken: selectedToken });

    setLoading(false);
  };

  return (
    <FullContainer variant="container.default">
      {renderWallet(isConnected, isLoading, handleMetamask)}
      {renderVaultBuilder(isConnected)}
    </FullContainer>
  );
};

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
      <Wallet.LogoButton icon={metamaskLogo} onClick={handleMetamask}>
        Connect with Metamask
      </Wallet.LogoButton>
      <Wallet.LogoButton icon={trezorLogo} isDisabled>
        Trezor - coming soon...
      </Wallet.LogoButton>
      <Wallet.LogoButton icon={ledgerLogo} isDisabled>
        Ledger - coming soon...
      </Wallet.LogoButton>
    </Wallet>
  ));

const renderVaultBuilder = (isConnected: boolean) => {
  return isConnected && <VaultBuilder.Wrapped />;
};

export default Hero;
