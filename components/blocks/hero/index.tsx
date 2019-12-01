/** @jsx jsx */
import { FullContainer, Loading } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import uniqBy from 'lodash.uniqby';
import React, { FC, useState } from 'react';
import ledgerLogo from '../../../public/images/ledger-logo.png';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import trezorLogo from '../../../public/images/trezor-logo.png';
import { getWeb3 as mkrGetWeb3, setup as mkrSetup } from '../../../utils/web3';
import { VaultMaker } from '../vault-maker/wrapped';
import { Wallet } from '../wallet';

const logoImg = "../../../public/images/rings.svg";

export interface HeroProps {
  variant?: string;
  children?: React.ReactNode;
}

interface Hero {
  Wrapped?: any;
};

export const Hero: FC<HeroProps> & Hero = (props: any) => {
  const [isLoading, setLoading] = useState(false);
  const { isConnected } = props;

  let maker: any = null;
  let web3: any = null;

  const addBalances = async (tokens: any[]) => {
    if (!maker) { return };
    const tokenService = maker.service('token');

    const clonedTokens: any[] = tokens.map((token: any) => token);
    for (const [idx, token] of tokens.entries()[Symbol.iterator]()) {
      const tokenFromService = tokenService.getToken(token.symbol);
      const tokenBalance = await tokenFromService.balance();
      clonedTokens[idx].balance = tokenBalance.toNumber();
      clonedTokens[idx].usdValue = tokenBalance.toNumber() * token.price;
    }

    return clonedTokens;
  };

  const getTokens = async () => {
    if (!maker) { return };
    const { cdpTypes } = maker.service('mcd:cdpType');
    const uniqCdpTypes = uniqBy(cdpTypes, (cdpt: any) => cdpt.currency.symbol);

    const dict: any = {};
    const tokens = uniqCdpTypes.map((cdpType: any) => {
      const token = {
        price: cdpType.price.toBigNumber().toNumber(),
        symbol: cdpType.currency.symbol
      };
      return {...token, ...dict[token.symbol]};
    });

    return tokens;
  };

  const getAccount = async () => {
    if (!web3) { return };
    const accounts = await web3.eth.getAccounts();
    const userAccount = accounts[0];

    return userAccount;
  };

  const selectDefaultToken = (tokens: any[]) => {
    const usdValues = tokens.map(token => parseInt(token.usdValue, 10));
    const maxIndex = usdValues.indexOf(Math.max(...usdValues));
    return tokens[maxIndex];
  };

  const setupMaker = async () => {
    const network = process.env.NETWORK || "kovan";
    const provider = process.env.PROVIDER || "browser";
    const url = process.env.URL;
    const privateKey = process.env.PRIVATE_KEY;

    maker = await mkrSetup(network, provider, { url, privateKey });
    web3 = (await mkrGetWeb3()) as any;
  };

  const handleMetamask = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await setupMaker();

    setTimeout(() => {
      setLoading(false);
    }, 3000)

    const userAccount = await getAccount();
    const tokens = await getTokens();
    const tokensWithBalances = await addBalances(tokens);
    const selectedToken = selectDefaultToken(tokensWithBalances);

    props.dispatchConnect({ address: userAccount });
    props.dispatchTokens({ tokens: tokensWithBalances });
    props.dispatchSelectToken({ selectedToken });

    setLoading(false);
  };

  return (
    <FullContainer variant="container.default">
      {renderWallet(isConnected, isLoading, handleMetamask)}
      {renderVaultMaker(isConnected)}
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
      <Wallet.LogoButton variant="outline" icon={metamaskLogo} onClick={handleMetamask}>
        Connect with Metamask
      </Wallet.LogoButton>
      <Wallet.LogoButton variant="outline" icon={trezorLogo} isDisabled={true}>
        Trezor - coming soon...
      </Wallet.LogoButton>
      <Wallet.LogoButton variant="outline" icon={ledgerLogo} isDisabled={true}>
        Ledger - coming soon...
      </Wallet.LogoButton>
    </Wallet>
  ));

const renderVaultMaker = (isConnected: boolean) => {
  return isConnected && <VaultMaker.Wrapped />;
};

