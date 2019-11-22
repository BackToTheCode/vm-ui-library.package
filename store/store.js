import { reducer } from './reducers/reducer';
import { useReducer } from 'react';
// rootReducer = combineReducers({potato: potatoReducer, tomato: tomatoReducer})
// // This would produce the following state object
// {
//   potato: {
//     // ... potatoes, and other state managed by the potatoReducer ...
//   },
//   tomato: {
//     // ... tomatoes, and other state managed by the tomatoReducer, maybe some nice sauce? ...
//   }
// }

const combineReducers = reducer => {
  return (state = {}, action) => {
    const keys = Object.keys(reducer);
    const nextReducers = {};

    for (let i = 0; i < keys.length; i++) {
      const invoke = reducer[keys[i]](state[keys[i]], action);
      nextReducers[keys[i]] = invoke;
    }
    return nextReducers;
  };
};

const rootReducer = combineReducers({main: reducer})

function useStore(rootReducer, state) {
  const initialState = state || rootReducer(undefined, { type: undefined });
  return useReducer(rootReducer, initialState);
}

export { useStore, rootReducer} ;

// import { reducer } from './reducers/reducer';

// // Main
// function combineReducers(reducerDict) {
//   const _initialState = getInitialState(reducerDict);
//   return function(state = _initialState, action) {
//     return Object.keys(reducerDict).reduce((acc, curr) => {
//       let slice = reducerDict[curr](state[curr], action);
//       return { ...acc, [curr]: slice };
//     }, state);
//   };
// }

// function useStore(rootReducer, state) {
//   const initialState = state || rootReducer(undefined, { type: undefined });
//   return useReducer(rootReducer, initialState);
// }

// // // Usage
// // function reducerA(state, action) {
// //    // ...
// // }
// // function reducerB(state, action) {
// //   // ...
// // }
// // function reducerC(state, action) {
// //   // ...
// // }

// const rootReducer = {
//   group1: combineReducers({ a: reducer })
//   // group2: reducerC
// };

// // Use this in a Context Provider and get access to state and dispatch
// // anywhere by using useContext.
// const [state, dispatch] = useStore(rootReducer); // optional state object as second arg

// // Helpers
// function getInitialState(reducerDict) {
//   return Object.keys(reducerDict).reduce((acc, curr) => {
//     const slice = reducerDict[curr](undefined, { type: undefined });
//     return { ...acc, [curr]: slice };
//   }, {});
// }

// export { useStore, rootReducer };
