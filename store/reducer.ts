import { CONFIRM_COLLATERAL_CHOICE_NUM } from '../components/blocks/vault-maker/constants/step-names';

export const initialState = {
  connected: false,
  variant: 'unconnected',
  maker: 'false',
  makeVault: {
    step: CONFIRM_COLLATERAL_CHOICE_NUM,
    collateral: 'ETH',
    collateralOption: 'no option selected'
  }
};

const reducer = (state: any, action: any) => {
  let makeVault = null;

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
          const newState = { ...state, makeVault };
          console.log('newState', newState)
          return newState;
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
