import { CONFIRM_COLLATERAL_CHOICE_NUM } from '../../constants/step-names';

const initialState = {
  tokens: {},
  balances: {
    eth: {
      name: 'ETH',
      bal: 0,
      price: 0
    },
    bat: {
      name: 'BAT',
      bal: 0,
      price: 0
    }
  },
  makeVault: {
    currentStep: CONFIRM_COLLATERAL_CHOICE_NUM,
    collateral: 'ETH',
    collateralOption: 'no option selected'
  }
};

const reducer = (state: any, action: any) => {
  let makeVault = null;
  
  const { payload } = action;

  switch (action.type) {
    case 'SET_COLLATERAL':  
      makeVault = null;
      makeVault = {
        ...state.makeVault,
        collateral: payload
      };
      return { ...state, makeVault };

    case 'SET_OPTION':
      makeVault = null;
      makeVault = {
        ...state.makeVault,
        collateralOption: payload
      };
      return { ...state, makeVault };

    case 'SET_BALANCES':
      return { ...state, balances: payload };

    case 'SET_STEP':
      makeVault = null;
      makeVault = {
        ...state.makeVault,
        currentStep: payload
      };

      return { ...state, makeVault };

    default:
      throw new Error();
  }
};

export {
  reducer,
  initialState
}