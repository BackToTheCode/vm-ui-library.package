import { useTheme } from 'emotion-theming';
import React from 'react';
import batLogo from '../../../../public/images/bat-logo.png';
import ethLogo from '../../../../public/images/ethereum-logo.svg';
import { ChangeCollateral } from '../2-change-collateral-type/wrapped';

export const changeCollateral = () => {
  const theme: any = useTheme();
  return (
    <ChangeCollateral.Wrapped>
      <ChangeCollateral.Title>
        Switch collateral type for your Vault
      </ChangeCollateral.Title>
      <ChangeCollateral.HorizontalRule sx={{mb: 4}} />
      <ChangeCollateral.Option
        icon={ethLogo}
        name="ETH"
        brand={theme.colors.eth}
      >
        ETH
      </ChangeCollateral.Option>
      <ChangeCollateral.Option
        icon={batLogo}
        name="BAT"
        brand={theme.colors.bat}
      >
        BAT
      </ChangeCollateral.Option>
      <ChangeCollateral.CTAButton>Confirm selection</ChangeCollateral.CTAButton>
      <ChangeCollateral.OAButton>Go back</ChangeCollateral.OAButton>
    </ChangeCollateral.Wrapped>
  );
};
