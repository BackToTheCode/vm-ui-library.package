import connect from '../../../store/connect';
import { Header } from '../header';

function mapStateToProps(state: any) {
  return {
    address: state.connection.address,
    isConnected: state.connection.isConnected
  };
}

const Wrapped = connect(mapStateToProps, null)(Header);

Header.Wrapped = Wrapped;

export { Header };
