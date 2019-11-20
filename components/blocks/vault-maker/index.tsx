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
import stepNames, { CONFIRM_COLLATERAL_CHOICE, CHANGE_COLLATERAL_CHOICE } from './constants/step-names';

const renderConfirmCollateralChoice = () => {
  return (
    <ConfirmCollateralChoice.Wrapped>
      <ConfirmCollateralChoice.Title sx={{mb: 8}}>
        We suggest ETH as collateral
      </ConfirmCollateralChoice.Title>
      <ConfirmCollateralChoice.Balance icon={ethLogo} />
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
      <ChangeCollateralType.Title sx={{mb: 7}}>
        Select a collateral type
      </ChangeCollateralType.Title>
      <ChangeCollateralType.Option
        icon={ethLogo}
        name="option1"
        brand={theme.colors.ethMain}
      >
        ETH
      </ChangeCollateralType.Option>
      <ChangeCollateralType.Option
        icon={repLogo}
        name="option2"
        brand={theme.colors.repMain}
      >
        REP
      </ChangeCollateralType.Option>
      <ChangeCollateralType.Option
        icon={batLogo}
        name="option3"
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
}

type VaultMaker = {
  Wrapped?: any;
};

const VaultMaker: React.FC<VaultMakerProps> & VaultMaker = ({
  currentStep
}) => (
  <Card sx={cardStyle}>
    <Container sx={containerStyle} variant="container.default">
      {currentStep === stepNames[CONFIRM_COLLATERAL_CHOICE] &&
        renderConfirmCollateralChoice()}

      {currentStep === stepNames[CHANGE_COLLATERAL_CHOICE] &&
        renderChangeCollateralType()}
    </Container>
  </Card>
);

export default VaultMaker;