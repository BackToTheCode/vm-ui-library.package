import connect from '../../../../store/connect';
import { ConfirmCollateral } from './index';

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(null, mapDispatchToProps)(ConfirmCollateral);

ConfirmCollateral.Wrapped = Wrapped;

export { ConfirmCollateral };
