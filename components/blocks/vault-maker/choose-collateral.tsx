import React, { Fragment, Children } from 'react';
import { Box, BoxProps, Text, TextProps, Image } from 'rebass';
import Button, { IButtonProps } from '../../elements/button/button';

const style = {
  button: {
    width: '100%',
    mb: 4
  }
};

type ChooseCollateral = {
  Balance: React.FC<any>;
  Message: React.FC<TextProps>;
  CTAButton: React.FC<IButtonProps>;
  OAButton: React.FC<IButtonProps>;
};

const ChooseCollateral: React.FC<any> & ChooseCollateral = (props: any) => {
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


ChooseCollateral.Balance = ({ icon }: any) => {
  return (
    <Box sx={{ flex: 1}}>
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
       
        <Text sx={{display: 'inline-block', position: 'relative', top: '-8px'}}>10 ETH</Text>
        <Box
          sx={{
            borderRadius: '50%',
            padding: '7px',
            alignSelf: 'flex-end',
            background: 'rgba(244, 183, 49, 0.10)',
            justifyContent: 'center',
            alignItems: 'center',
            ml: '10px',
            display: 'inline-flex'
          }}
        >
          <Image
            sx={{
              width: '45px',
              height: '45px',
              padding: '8px',
              borderRadius: '50%',
              bg: 'rgba(244, 183, 49, 1)'
            }}
            src={icon}
          />
        </Box>
      </Text>
      <Text sx={{ mb: 6, color: 'grey' }} variant="body.small">
        $2000 @ 80 USD PER ETH
      </Text>
    </Box>
  );
};

ChooseCollateral.Message = ({ children }) => (
  <Text sx={{ flex: 1}} variant="heading.regular">
    {children}
  </Text>
);

ChooseCollateral.CTAButton = ({ children }) => (
  <Button
    sx={{ ...style.button, ...{ alignContent: 'end' } }}
    variant="primary"
  >
    {children}
  </Button>
);

ChooseCollateral.OAButton = ({ children }) => (
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

export default ChooseCollateral;
