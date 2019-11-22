import Hero from '../hero';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  return {
    isConnected: state.connection.isConnected
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchConnect: (payload: any) => dispatch({ type: 'CONNECT', payload }),
    dispatchDisconnect: (payload: any) => dispatch({ type: 'DISCONNECT', payload }),
    dispatchTokens: (payload: any) => dispatch({ type: 'TOKENS', payload}),
    dispatchDefaultToken: (payload: any) => dispatch({ type: 'DEFAULT_TOKEN', payload}),
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Hero);

Hero.Wrapped = Wrapped;

export default Hero;
