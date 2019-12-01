import { CONFIRM_COLLATERAL_NUM, LOCK_COLLATERAL_NUM, DRAW_DAI_NUM } from '../../constants/step-names';
import { types } from '../actions';

const initialState: any = {
  lockAmount: 0,
  selectedToken: null,
  step: DRAW_DAI_NUM,
};

const vaultReducer = (state: any = initialState, action: any) => {
  const { STEP, LOCK_COLLATERAL } = types.vault;
  const { payload, type } = action;

  switch (type) {
    case STEP:
      const { step } = payload;
      console.log('STATE-STEP', {...state, step})
      return { ...state, step };
    case LOCK_COLLATERAL:
      const { lockAmount } = payload;
      console.log('STATE-STEP', {...state, lockAmount})
      return { ...state, lockAmount}
    default:
      return state;
  }
};

export default vaultReducer;
