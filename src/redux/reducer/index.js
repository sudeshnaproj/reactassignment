import reducer from "./reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart_reducer: reducer,
});

export default rootReducer;
