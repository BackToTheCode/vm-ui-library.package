/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { FullContainer } from '../../elements/container/index';
import {
  setup as mkrSetup,
  getWeb3 as mkrGetWeb3,
  ETH,
  BAT
} from '../../../utils/web3';
import { USD_BAT } from '../../../constants/coin-prices'
import Loading from '../../elements/loading/loading';
import VaultBuilder from '../vault-maker/wrapped';
import Wallet from '../wallet';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import ledgerLogo from '../../../public/images/ledger-logo.png';
import trezorLogo from '../../../public/images/trezor-logo.png';
import toCurrency from '../../../utils/currency-formatter';
// import uniqBy from 'lodash.uniqby';

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
  // const [maker, setMaker] = useState(null);
  // const [tokens, setTokens] = useState({});
  

  const getBalances = async () => {
    const tokenService = maker.service('token');
    const eth = tokenService.getToken(ETH);
    const bat = tokenService.getToken(BAT);

    const ethBal = await eth.balance();
    const batBal = await bat.balance();

    return {
      eth: ethBal.toNumber(),
      bat: batBal.toNumber()
    };
  };

  // const getTokens = async () => {
  //   const { cdpTypes } = maker.service('mcd:cdpType');
  //   const uniqCdpTypes = uniqBy(cdpTypes, (cdpt: any) => cdpt.currency.symbol);
  //   console.dir(uniqCdpTypes);

  //   const tokens: any = uniqCdpTypes.map((cdpType: any) => {
  //     const token = {
  //       symbol: cdpType.currency.symbol,
  //       price: cdpType.price.toBigNumber(),
  //     }
  //     return Object.assign(token, tokens[token.symbol])
  //   })

  //   return tokens;
  // };

  const getAccount = async () => {
    const web3 = (await mkrGetWeb3()) as any;

    if (web3) {
      const accounts = await web3.eth.getAccounts();
      const userAccount = accounts[0];

      return userAccount;
    }
  };

  const getLargestTokenBalance = (currencies: any[]) => {
    const balances = currencies.map(currency => parseInt(currency.bal));
    const maxIndex = balances.indexOf(Math.max(...balances));

    return currencies[maxIndex];
  };

  const selectDefaultCollateral = async (balances: any) => {
    const price = maker.service('price');
    const ethCurrencyRatio = await price.getEthPrice();
    // const batCurrencyRatio = await price.getBatPrice();

    const ethPrice = ethCurrencyRatio.toBigNumber().toNumber();
    // const batPrice = batCurrencyRatio.toBigNumber().toNumber();
    const batPrice = USD_BAT;

    const tokens = {
      eth: {
        name: 'ETH',
        bal: toCurrency(balances.eth),
        price: toCurrency(ethPrice)
      },
      bat: {
        name: 'BAT',
        bal: toCurrency(balances.bat),
        price: toCurrency(batPrice)
      }
    };

    const tokenList = Object.values(tokens);

    const defaultToken = getLargestTokenBalance(tokenList);

    return [defaultToken, tokens];
  };

  const handleMetamask = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    maker = await mkrSetup(process.env.NETWORK, process.env.PROVIDER)
    // setMaker(await mkrSetup(process.env.NETWORK, process.env.PROVIDER));
    // setTokens(await getTokens());
    // setBalances 

    // getMaker
    // getTokens
    // getBalances
    // selectDefaultToken

    // dispatchAll
    // dispatchSetConnect
    // dispatchSetTokens
    // dispatchSetDefaultToken

    const userAccount = await getAccount();
    const simpleBals = await getBalances();
    const [defaultToken, tokenBalances] = await selectDefaultCollateral(
      simpleBals
    );

    props.dispatchConnect({ address: userAccount });
    props.dispatchSetBalances(tokenBalances);
    props.dispatchSetCollateral(defaultToken.name);

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
