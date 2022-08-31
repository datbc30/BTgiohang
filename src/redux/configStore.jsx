import { combineReducers, createStore } from "redux";
import { qlsvReducers } from "./Reducers/qlsvReducers";
import { booKing } from "./Reducers/bookIng";
import { danhSachGheDangDat } from './Reducers/danhSachGheDangDat'

const rootReducer = combineReducers({
  number: 1,
  qlsvReducers,
  booKing:booKing,
  danhSachGheDangDat,

});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
