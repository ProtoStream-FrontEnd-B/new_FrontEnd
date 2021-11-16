import thunk from "redux-thunk";
import rootReducers from "./reducers";
import { createStore , applyMiddleware , compose  } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__|| compose
const store = createStore(
   rootReducers, /* preloadedState, */
   composeEnhancers(applyMiddleware(thunk))

  );
 

  export default store;