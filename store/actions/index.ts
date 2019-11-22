const CONNECT = 'CONNECT';
const DISCONNECT = 'DISCONNECT';

const MAKER = 'MAKER';
const WEB3 = 'WEB3';
const DEFAULT_TOKEN = 'DEFAULT_TOKEN';
const TOKENS = 'TOKENS';

const STEP = 'STEP';

export const types = {
  connection: { CONNECT, DISCONNECT },
  tokens: { MAKER, WEB3, DEFAULT_TOKEN, TOKENS },
  vault: { STEP }
};
