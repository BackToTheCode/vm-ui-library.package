import connect from '../../../../store/connect';
import { ChangeCollateral } from './index';

function mapStateToProps(state: any) {
  const { symbol } = state.tokens.selectedToken;
  const { tokens } = state.tokens;

  return {
    symbol,
    tokens
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchSelectToken: (payload: any) =>
      dispatch({ type: 'SELECT_TOKEN', payload }),
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ChangeCollateral);

ChangeCollateral.Wrapped = Wrapped;

export { ChangeCollateral };
