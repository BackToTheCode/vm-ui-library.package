import VaultMaker from './index';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  const { step } = state.vault;
  return {
    step
  };
}

const Wrapped = connect(mapStateToProps, null)(VaultMaker);

VaultMaker.Wrapped = Wrapped;

export default VaultMaker;