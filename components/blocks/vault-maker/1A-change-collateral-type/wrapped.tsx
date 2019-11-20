import ChangeCollateralType from './index';
import connect from '../../../../store/connect';

function mapStateToProps(state: any) {
  return {
    selectedOption: state.makeVault.changeCollateral
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchChangeCollateral: (payload: any) => dispatch({ type: 'CHANGE_COLLATERAL', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(ChangeCollateralType);

ChangeCollateralType.Wrapped = Wrapped;

export default ChangeCollateralType;
