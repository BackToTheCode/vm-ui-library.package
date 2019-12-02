import connect from '../../../../store/connect';
import { OpenVault } from './index';

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(null, mapDispatchToProps)(OpenVault);

OpenVault.Wrapped = Wrapped;

export { OpenVault };
