import ConfirmCollateralChoice from './index';
import connect from '../../../../store/connect';

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(null, mapDispatchToProps)(ConfirmCollateralChoice);

ConfirmCollateralChoice.Wrapped = Wrapped;

export default ConfirmCollateralChoice;
