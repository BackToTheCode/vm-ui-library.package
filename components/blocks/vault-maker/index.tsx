import React from 'react';
import Card from '../../elements/card';
import ConfirmCollateralChoice from './1-confirm-collateral-choice/wrapped';
import ChangeCollateralType from './2-change-collateral-type/wrapped';
import Container from '../../elements/container';
import ethLogo from '../../../public/images/ethereum-logo.svg';
import repLogo from '../../../public/images/rep-logo.webp';
import batLogo from '../../../public/images/bat-logo.png';
import { useTheme } from 'emotion-theming';
import { cardStyle, containerStyle } from './styles';
import stepNames, {
  CONFIRM_COLLATERAL_CHOICE,
  CHANGE_COLLATERAL_CHOICE
} from '../../../constants/step-names';

export interface VaultMakerProps {
  children?: any;
  step?: number;
  symbol?: string;
  usdValue?: number;
  balance?: number;
  price?: number;
}

type VaultMaker = {
  Wrapped?: any;
};

const VaultMaker: React.FC<VaultMakerProps> & VaultMaker = (props) => {
  const { step, symbol, usdValue, balance, price } = props;

  return (
    <Card sx={cardStyle}>
      <Container sx={containerStyle} variant="container.default">
        {step === stepNames[CONFIRM_COLLATERAL_CHOICE] &&
          renderConfirmCollateralChoice(symbol, balance, price, usdValue)}

        {step === stepNames[CHANGE_COLLATERAL_CHOICE] &&
          renderChangeCollateralType()}
      </Container>
    </Card>
  );
};

VaultMaker.displayName = 'VaultMaker';

const renderConfirmCollateralChoice = (
  symbol: string,
  balance: number,
  price: number,
  usdValue: number
) => {
  const icons: any = {
    ETH: ethLogo,
    REP: repLogo,
    BAT: batLogo
  };
  const icon = icons[symbol];
  return (
    <ConfirmCollateralChoice.Wrapped>
      <ConfirmCollateralChoice.Title sx={{ mb: 8 }}>
        {`We suggest ${symbol} as collateral for your Vault`}
      </ConfirmCollateralChoice.Title>
      <ConfirmCollateralChoice.Balance
        balance={balance}
        price={price}
        usdValue={usdValue}
        symbol={symbol}
        icon={icon}
      />
      <ConfirmCollateralChoice.CTAButton>
        Sounds good
      </ConfirmCollateralChoice.CTAButton>
      <ConfirmCollateralChoice.OAButton>
        Switch collateral type
      </ConfirmCollateralChoice.OAButton>
    </ConfirmCollateralChoice.Wrapped>
  );
};

const renderChangeCollateralType = () => {
  const theme: any = useTheme();
  return (
    <ChangeCollateralType.Wrapped>
      <ChangeCollateralType.Title sx={{ mb: 7 }}>
        Switch to a different collateral type for your Vault
      </ChangeCollateralType.Title>
      <ChangeCollateralType.Option
        icon={ethLogo}
        name="option1"
        brand={theme.colors.ethMain}
      >
        ETH
      </ChangeCollateralType.Option>
      <ChangeCollateralType.HorizontalRule />
      <ChangeCollateralType.Option
        icon={batLogo}
        name="option2"
        brand={theme.colors.batMain}
      >
        BAT
      </ChangeCollateralType.Option>
      <ChangeCollateralType.CTAButton>
        Confirm selection
      </ChangeCollateralType.CTAButton>
    </ChangeCollateralType.Wrapped>
  );
};

export default VaultMaker;
