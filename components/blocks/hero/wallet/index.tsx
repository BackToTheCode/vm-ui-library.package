import React, { Children } from 'react';
import { Box, Heading, Image, Text, TextProps } from 'rebass';
import { LargeButton, ButtonProps } from '../../../elements/button/button';

type Wallet = {
  Header: React.FC<TextProps>;
  SubHeader: React.FC<TextProps>;
  Button: React.FC<ButtonProps>;
};

const Wallet: React.FC<any> & Wallet = props => {
  const { children } = props;
  return (
    <Box>
      {Children.map(children, (child: any) => {
        if (child.type.name === 'Header') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'SubHeader') {
          return React.cloneElement(child, props);
        }

        if (child.type.name === 'Button') {
          return React.cloneElement(child, props);
        }

        return child;
      })}
    </Box>
  );
};

Wallet.Header = ({ children }: any) => (
  <Heading variant="heading.large" sx={{ mb: 5, textAlign: 'center' }}>
    {children}
  </Heading>
);

Wallet.SubHeader = ({ sx, children }: any) => (
  <Text
    variant="body.regular"
    sx={{
      ...{
        mb: 7,
        color: 'grey',
        mx: 'auto',
        display: 'block',
        textAlign: 'center'
      },
      ...sx
    }}
  >
    {children}
  </Text>
);

const style = {
  button: {
    mx: 'auto',
    mb: 4,
    width: '320px'
  },
  logo: {
    container: {
      width: '20px',
      display: 'inline-block',
      mr: 3
    },
    icon: {
      width: '20px',
      position: 'relative',
      top: '4px'
    }
  }
};

Wallet.Button = ({ sx, icon, isDisabled, onClick, children }) => (
  <LargeButton
    variant="outline"
    isDisabled={isDisabled}
    sx={style.button}
    onClick={onClick}
  >
    <Box sx={{ ...style.logo.container, ...sx }}>
      <Image sx={{ ...style.logo.icon, ...sx }} src={icon} />
    </Box>
    {children}
  </LargeButton>
);

export default Wallet;
