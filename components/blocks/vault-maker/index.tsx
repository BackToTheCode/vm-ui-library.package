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

const renderConfirmCollateralChoice = (
  collateral: string,
  balance: number,
  price: number
) => {
  const icons: any = {
    ETH: ethLogo,
    REP: repLogo,
    BAT: batLogo
  };
  const icon = icons[collateral];
  return (
    <ConfirmCollateralChoice.Wrapped>
      <ConfirmCollateralChoice.Title sx={{ mb: 8 }}>
        {`We suggest ${collateral} as collateral for your Vault`}
      </ConfirmCollateralChoice.Title>
      <ConfirmCollateralChoice.Balance
        balance={balance}
        price={price}
        collateral={collateral}
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

export interface VaultMakerProps {
  children?: any;
  currentStep?: number;
  collateral?: string;
  balance?: number;
  price?: number;
}

type VaultMaker = {
  Wrapped?: any;
};

const VaultMaker: React.FC<VaultMakerProps> & VaultMaker = ({
  currentStep,
  collateral,
  balance,
  price
}) => (
  <Card sx={cardStyle}>
    <Container sx={containerStyle} variant="container.default">
      {currentStep === stepNames[CONFIRM_COLLATERAL_CHOICE] &&
        renderConfirmCollateralChoice(collateral, balance, price)}

      {currentStep === stepNames[CHANGE_COLLATERAL_CHOICE] &&
        renderChangeCollateralType()}
    </Container>
  </Card>
);

export default VaultMaker;
