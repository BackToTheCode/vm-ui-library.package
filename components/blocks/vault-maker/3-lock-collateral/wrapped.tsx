import connect from '../../../../store/connect';
import { LockCollateral } from './index';

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
    dipatchLockCollateral: ({ lockAmount }: { lockAmount: number }) => {
      const payload = { lockAmount };
      return dispatch({ type: 'LOCK_COLLATERAL', payload });
    },
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(LockCollateral);

LockCollateral.Wrapped = Wrapped;

export { LockCollateral };
