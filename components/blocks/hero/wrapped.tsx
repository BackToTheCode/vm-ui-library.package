import Hero from '../hero';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  return {
    isConnected: state.isConnected
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchConnect: (payload: any) => dispatch({ type: 'SET_CONNECTED', payload }),
    dispatchDisconnect: (payload: any) => dispatch({ type: 'SET_DISCONNECT', payload }),
    dispatchSetBalances: (payload: any) => dispatch({ type: 'SET_BALANCES', payload }),
    dispatchSetCollateral: (payload: any) => dispatch({ type: 'SET_COLLATERAL', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Hero);

Hero.Wrapped = Wrapped;

export default Hero;
