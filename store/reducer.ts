import { CONFIRM_COLLATERAL_CHOICE_NUM } from '../constants/step-names';

export const initialState = {
  connected: false,
  variant: 'unconnected',
  balances: {
    eth: {
      name: 'ETH',
      bal: 0,
      price: 0
    },
    rep: {
      name: 'REP',
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
    step: CONFIRM_COLLATERAL_CHOICE_NUM,
    collateral: 'ETH',
    collateralOption: 'no option selected'
  }
};

const reducer = (state: any, action: any) => {
  let makeVault = null;
  console.log('action', action)
  switch (action.type) {
    case 'CONNECT':
      return { ...state, ...action.payload, connected: true };
    case 'DISCONNECT':
      return { ...state, connected: false };
    case 'SET_COLLATERAL':
      makeVault = null;
      makeVault = {
        ...state.makeVault,
        collateral: action.payload
      };
       return { ...state, makeVault };
    case 'SET_OPTION':
      makeVault = null;
      makeVault = {
        ...state.makeVault,
        collateralOption: action.payload
      };
      return { ...state, makeVault };

    case 'SET_BALANCES':
        return { ...state, balances: action.payload };

    case 'SET_STEP':
      makeVault = null;
      makeVault = {
        ...state.makeVault,
        step: action.payload
      };

      return { ...state, makeVault };

    default:
      throw new Error();
  }
};

export default reducer;
