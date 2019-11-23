import VaultMaker from './index';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  const { step } = state.vault;
  const { selectedToken } = state.tokens;
  const { symbol, usdValue, balance, price } = selectedToken;

  return {
    step,
    symbol,
    usdValue,
    balance,
    price
  };
}

const Wrapped = connect(mapStateToProps, null)(VaultMaker);

VaultMaker.Wrapped = Wrapped;

export default VaultMaker;
