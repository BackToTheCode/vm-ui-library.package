import VaultMaker from './index';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  return {
    currentStep: state.makeVault.step,
    collateral: state.makeVault.collateral
  };
}

const Wrapped = connect(mapStateToProps, null)(VaultMaker);

VaultMaker.Wrapped = Wrapped;

export default VaultMaker;