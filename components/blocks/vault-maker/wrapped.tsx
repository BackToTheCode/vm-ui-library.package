import VaultMaker from './index';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  return {
    currentStep: state.makeVault.step
  };
}

const Wrapped = connect(mapStateToProps, null)(VaultMaker);

VaultMaker.Wrapped = Wrapped;

export default VaultMaker;