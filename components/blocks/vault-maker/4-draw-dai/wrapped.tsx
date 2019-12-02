import connect from '../../../../store/connect';
import { DrawDai } from './index';

function mapStateToProps(state: any) {
  const { lockAmount, drawAmount } = state.vault;
  const { symbol } = state.tokens.selectedToken;
  const { tokens } = state.tokens;

  return {
    drawAmount,
    lockAmount,
    symbol,
    tokens
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchDrawDai: ({ drawAmount }: { drawAmount: number }) => {
      const payload = { drawAmount };
      return dispatch({ type: 'DRAW_DAI', payload });
    },
    dispatchStep: (payload: any) => dispatch({ type: 'STEP', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(DrawDai);

DrawDai.Wrapped = Wrapped;

export { DrawDai };
