import {combineReducers, applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import authReducer from "./Auth/reducer";
import languageReducer from "./Language/reducer";


const reducers = combineReducers({
  auth: authReducer,
  language: languageReducer,
});


const store = createStore(reducers, applyMiddleware(thunk));


export default store;
