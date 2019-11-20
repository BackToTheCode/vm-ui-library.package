import React, { Fragment, Children } from 'react';
import { Box, BoxProps, Text, TextProps } from 'rebass';
import Button, { ButtonProps } from '../../../elements/button/button';
import CoinIcon from '../../../elements/icon';
import { useTheme } from 'emotion-theming';

const style = {
  button: {
    width: '100%',
    mb: 4
  }
};

type ChooseCollateral = {
  Balance: React.FC<any>;
  Message: React.FC<TextProps>;
  CTAButton: React.FC<ButtonProps>;
  OAButton: React.FC<ButtonProps>;
};

const ConfirmCollateral: React.FC<any> & ChooseCollateral = (props: any) => {
  const { children } = props;
  return (
    <Fragment>
      {Children.map(children, (child: any) => {
        if (child.type.name === 'Icon') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'Balance') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'Message') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'CTAButton') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'OAButton') {
          return React.cloneElement(child, props);
        }

        return child;
      })}
    </Fragment>
  );
};

export interface IconProps extends BoxProps {
  icon: string;
}

ConfirmCollateral.Balance = ({ icon }: any) => {
  const theme: any = useTheme();
  return (
    <Box sx={{ flex: 1 }}>
      <Text
        sx={{
          mb: 3,
          justifyContent: 'left',
          alignItems: 'baseline',
          color: 'grey'
        }}
        variant="body.small"
      >
        BALANCE
      </Text>
      <Text sx={{ mb: 3 }} variant="heading.large">
        <Text
          sx={{ display: 'inline-block', position: 'relative', top: '-8px' }}
        >
          10 ETH
        </Text>
        <CoinIcon sx={{ml: '20px', position: 'relative', top: '-2px', bg: `${theme.colors.ethPrimar}`}} icon={icon} />
      </Text>
      <Text sx={{ mb: 6, color: 'grey' }} variant="body.small">
        $2000 @ 80 USD PER ETH
      </Text>
    </Box>
  );
};

ConfirmCollateral.Message = ({ children }) => (
  <Text sx={{ flex: 1 }} variant="heading.regular">
    {children}
  </Text>
);

ConfirmCollateral.CTAButton = ({ children }) => (
  <Button
    sx={{ ...style.button, ...{ alignContent: 'end' } }}
    variant="primary"
  >
    {children}
  </Button>
);

ConfirmCollateral.OAButton = ({ children }) => (
  <Button
    sx={{
      ...style.button,
      ...{ alignContent: 'end', borderColor: 'white', mb: 0 }
    }}
    variant="link"
  >
    {children}
  </Button>
);

export default ConfirmCollateral;
