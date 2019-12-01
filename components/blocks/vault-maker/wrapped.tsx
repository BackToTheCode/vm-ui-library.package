import connect from '../../../store/connect';
import { VaultMaker } from '../vault-maker/index';

function mapStateToProps(state: any) {
  const { step } = state.vault;
  const { selectedToken } = state.tokens;
  const { symbol, usdValue, balance, price } = selectedToken;

  return {
    balance,
    price,
    step,
    symbol,
    usdValue
  };
}

const Wrapped = connect(mapStateToProps, null)(VaultMaker);

VaultMaker.Wrapped = Wrapped;

export { VaultMaker };
