import { types } from '../actions';

export type ConnectionAction =
  | { type: 'CONNECT'; payload: { address: string } }
  | { type: 'DISCONNECT'; payload: null };

export type State = {
  isConnected: boolean;
  address?: string;
};

const initialState: State = {
  isConnected: false
};

const connectReducer = (
  state: State = initialState,
  action: ConnectionAction
) => {
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
