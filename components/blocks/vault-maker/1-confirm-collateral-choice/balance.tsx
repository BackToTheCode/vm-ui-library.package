import React from 'react'; 
import { Box, Text } from 'rebass';
import CoinIcon from '../../../elements/icon';
import { useTheme } from 'emotion-theming';

export interface BalanceProps {
    icon: any;
    collateral: string;
}

const Balance: React.FC<BalanceProps> = ({ icon, collateral }: any) => {
    const theme: any = useTheme();
    return (
      <Box sx={{ flex: 1 }}>
        <Text
          sx={{
            mb: 3,
            justifyContent: 'left',
            alignItems: 'baseline',
            color: 'grey',
            fontWeight: 'bold',
            letterSpacing: '0.5px'
          }}
          variant="body.small"
        >
          BALANCE
        </Text>
        <Text sx={{ mb: 3 }} variant="heading.large">
          <Text
            sx={{ display: 'inline-block', position: 'relative', top: '-8px' }}
          >
            {`10 ${collateral}`}
          </Text>
          <CoinIcon sx={{ml: '20px', position: 'relative', top: '-2px', bg: `${theme.colors.ethMain}`}} icon={icon} />
        </Text>
        <Text sx={{ mb: 6, color: 'grey' }} variant="body.small">
          {`$XXXX @ XX USD PER ${collateral}`}
        </Text>
      </Box>
    );
  };

  export default Balance;