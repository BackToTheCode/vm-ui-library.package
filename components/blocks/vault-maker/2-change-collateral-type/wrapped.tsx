import ChangeCollateralType from './index';
import connect from '../../../../store/connect';

function mapStateToProps(state: any) {
  return {
    selectedOption: state.makeVault.collateralOption
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchSetOption: (payload: any) => dispatch({ type: 'SET_OPTION', payload }),
    dispatchSetCollateral: (payload: any) => dispatch({ type: 'SET_COLLATERAL', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ChangeCollateralType);

ChangeCollateralType.Wrapped = Wrapped;

export default ChangeCollateralType;
