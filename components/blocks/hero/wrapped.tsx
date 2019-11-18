import Hero from '../hero';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  return {
    connected: state.connected
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    dispatchConnect: (payload: any) => dispatch({ type: 'CONNECT', payload }),
    dispatchDisconnect: (payload: any) =>
      dispatch({ type: 'DISCONNECT', payload })
  };
}

const Wrapped = connect(mapStateToProps, mapDispatchToProps)(Hero);

Hero.Wrapped = Wrapped;

export default Hero;
