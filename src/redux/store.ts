import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactReducer, caseReducer } from "./reducers";

const rootReducer = combineReducers({
  case: caseReducer,
  contacts: contactReducer,
});

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
