import React, { Dispatch, useContext } from 'react';
import { Context } from '../components/context';
import { ConnectionAction } from './reducers/connect-reducer';

export interface Store {
  state: any;
  dispatch: Dispatch<ConnectionAction>;
};

function connect(mapStateToProps: any, mapDispatchToProps: any) {
  return function(Component: React.FC<any>) {
    return function(props: any) {
      const { state, dispatch } = useContext(Context) as Store;
      const stateToProps = mapStateToProps ? mapStateToProps(state) : {};
      const dispatchToProps = mapDispatchToProps
        ? mapDispatchToProps(dispatch)
        : {};
      const newProps = { ...props, ...stateToProps, ...dispatchToProps };
      return <Component {...newProps} />;
    };
  };
}

export default connect;
