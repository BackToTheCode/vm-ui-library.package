import ChangeCollateralType from './index';
import connect from '../../../../store/connect';

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
    dispatchSelectToken: (payload: any) => dispatch({ type: 'SELECT_TOKEN', payload }),
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeCollateralType);

ChangeCollateralType.Wrapped = Wrapped;

export default ChangeCollateralType;
