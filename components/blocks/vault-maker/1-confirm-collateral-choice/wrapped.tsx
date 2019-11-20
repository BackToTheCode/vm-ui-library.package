import ConfirmCollateralChoice from './index';
import connect from '../../../../store/connect';

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchSetStep: (payload: any) => dispatch({ type: 'SET_STEP', payload })
  };
}

const Wrapped = connect(null, mapDispatchToProps)(ConfirmCollateralChoice);

ConfirmCollateralChoice.Wrapped = Wrapped;

export default ConfirmCollateralChoice;
