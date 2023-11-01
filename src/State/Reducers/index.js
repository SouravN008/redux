import { combineReducers } from "redux";
import amountReducer from "./amountReducer"; // Fixed typo here

const reducers = combineReducers({
  amount: amountReducer
});

export default reducers;
