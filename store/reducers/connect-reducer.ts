import { types } from '../actions';

const initialState = {
  isConnected: false
};

const connectReducer = (state: any = initialState, action: any) => {
  const { CONNECT, DISCONNECT } = types.connection;
  const { payload, type } = action;

  switch (type) {
    case CONNECT:
      const { address } = payload;
      return { ...state, address, isConnected: true };

    case DISCONNECT:
      return { ...state, isConnected: false };

    default:
      return state;
  }
};

export default connectReducer;
