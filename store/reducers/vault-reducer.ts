import { types } from '../actions';

const initialState: any = {
  step: 1
};

const vaultReducer = (state: any = initialState, action: any) => {
  const { STEP } = types.vault;
  const { payload, type } = action;

  switch (type) {
    case STEP:
      const { step } = payload;
      return { ...state, step };

    default:
      return state;
  }
};

export default vaultReducer;
