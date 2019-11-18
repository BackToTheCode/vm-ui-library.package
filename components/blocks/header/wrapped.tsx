import Header from '../header';
import connect from '../../../store/connect';

function mapStateToProps(state: any) {
  return {
    connected: state.connected
  };
}

const Wrapped = connect(mapStateToProps, null)(Header);

Header.Wrapped = Wrapped;

export default Header;
