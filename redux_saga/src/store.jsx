import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer as root } from "./reducer";
import { countReducer } from "./countReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  post: root,
  counter: countReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
