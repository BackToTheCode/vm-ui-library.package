import connect from '../../../../store/connect';
import { ConfirmVault } from './index';

function mapStateToProps(state: any) {
  const { lockAmount, drawAmount } = state.vault;
  const { penalty, price, ratio, symbol } = state.tokens.selectedToken;
  const { tokens } = state.tokens;

  return {
    drawAmount,
    lockAmount,
    penalty,
    price,
    ratio,
    symbol,
    tokens
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ConfirmVault);

ConfirmVault.Wrapped = Wrapped;

export { ConfirmVault };
