import { useContext } from 'react';
import { Context } from '../pages/index';

function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return function(props) {
      const { state, dispatch } = useContext(Context);
      const stateToProps = mapStateToProps ? mapStateToProps(state) : {};
      const dispatchToProps = mapDispatchToProps ? mapDispatchToProps(dispatch) : {}; 
      const newProps = { ...props, ...stateToProps, ...dispatchToProps };
      return <Component { ...newProps } />;
    };
  };
}

export default connect;
