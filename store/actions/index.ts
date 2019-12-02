const CONNECT = 'CONNECT';
const DISCONNECT = 'DISCONNECT';

const SELECT_TOKEN = 'SELECT_TOKEN';
const TOKENS = 'TOKENS';

const STEP = 'STEP';
const LOCK_COLLATERAL = 'LOCK_COLLATERAL';
const DRAW_DAI = 'DRAW_DAI';

export const types = {
  connection: { CONNECT, DISCONNECT },
  tokens: { SELECT_TOKEN, TOKENS },
  vault: { STEP, LOCK_COLLATERAL, DRAW_DAI }
};
