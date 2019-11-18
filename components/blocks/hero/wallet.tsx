import { Box, Image, Text } from 'rebass';
import Button from '../../elements/button/button';
import metamaskLogo from '../../../public/images/metamask-fox.svg';
import ledgerLogo from '../../../public/images/ledger-logo.png';
import trezorLogo from '../../../public/images/trezor-logo.png';

export interface IWalletProps {
  handleMetamask: (e: any) => Promise<void>;
}

const logoStyles = {
  logoHolder: {
    width: '20px',
    display: 'inline-block',
    mr: 3
  },
  logo: {
    width: '20px',
    position: 'relative',
    top: '4px'
  }
};

const buttonStyles = {
  display: 'block',
  margin: 'auto',
  mb: 3,
  width: '320px'
};

const Wallet: React.FC<IWalletProps>  = ({ handleMetamask }: IWalletProps) => {
  return (
    <Box>
      <Text variant="heading.large" sx={{ mb: 5, textAlign: 'center' }}>
        Start Making a Vault
      </Text>
      <Text
        variant="body.regular"
        sx={{
          mb: 7,
          color: 'grey',
          mx: 'auto',
          display: 'block',
          textAlign: 'center'
        }}
      >
        Connect to the Ethereum network
      </Text>
      <Button
        variant="outline.tall"
        style={buttonStyles}
        onClick={handleMetamask}
      >
        <Box sx={logoStyles.logoHolder}>
          <Image sx={logoStyles.logo} src={metamaskLogo} />
        </Box>
        Connect with Metamask
      </Button>
      <Button
        disable={true}
        variant={true ? 'outline.disabled.tall' : 'outline.tall'}
        style={buttonStyles}
      >
        <Box
          sx={{
            ...logoStyles.logoHolder,
            ...{ padding: '1px', top: '-1px', position: 'relative' }
          }}
        >
          <Image sx={logoStyles.logo} src={ledgerLogo} />
        </Box>
        Trezor - coming soon...
      </Button>
      <Button
        disable={true}
        variant={true ? 'outline.disabled.tall' : 'outline.tall'}
        style={buttonStyles}
      >
        <Box sx={logoStyles.logoHolder}>
          <Image sx={logoStyles.logo} src={trezorLogo} />
        </Box>
        Ledger Blue - coming soon...
      </Button>
    </Box>
  );
};

export default Wallet;
