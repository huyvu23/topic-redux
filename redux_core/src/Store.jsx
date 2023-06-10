import { combineReducers, createStore, applyMiddleware } from "redux";
import { counterReducer } from "./Reducer";
import { todosReducer } from "./todosReducer";
import thunk from "redux-thunk";

// Dùng để gộp 2 hoặc nhiều reducer
const rootReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
