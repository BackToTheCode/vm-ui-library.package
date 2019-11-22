import { types } from '../actions';

const initialState: any = {
  tokens: {},
  defaultToken: {}
};

const tokenReducer = (state: any = initialState, action: any) => {
  const { DEFAULT_TOKEN, TOKENS } = types.tokens;
  const { payload, type } = action;

  switch (type) {
    case DEFAULT_TOKEN:
      const { defaultToken } = payload;
      return { ...state, defaultToken };

    case TOKENS:
      const { tokens } = payload;
      return { ...state, tokens };

    default:
      return state;
  }
};

export default tokenReducer;
