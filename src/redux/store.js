import thunk from "redux-thunk";
import rootReducers from "./reducers";
import { createStore , applyMiddleware , compose  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
   rootReducers, /* preloadedState, */
 +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
 

  export default store;