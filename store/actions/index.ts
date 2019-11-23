const CONNECT = 'CONNECT';
const DISCONNECT = 'DISCONNECT';

const SELECT_TOKEN = 'SELECT_TOKEN';
const TOKENS = 'TOKENS';

const STEP = 'STEP';

export const types = {
  connection: { CONNECT, DISCONNECT },
  tokens: { SELECT_TOKEN, TOKENS },
  vault: { STEP }
};
