import { types } from '../actions';

const defaultToken = {
  symbol: 'ETH',
  price: 0,
  balance: 0,
  usdValue: 0
};

const initialState: any = {
  tokens: [defaultToken],
  selectedToken: defaultToken
};

const tokenReducer = (state: any = initialState, action: any) => {
  const { SELECT_TOKEN, TOKENS } = types.tokens;
  const { payload, type } = action;

  switch (type) {
    case SELECT_TOKEN:
      const { selectedToken } = payload;
      return { ...state, selectedToken };

    case TOKENS:
      const { tokens } = payload;
      return { ...state, tokens };

    default:
      return state;
  }
};

export default tokenReducer;
