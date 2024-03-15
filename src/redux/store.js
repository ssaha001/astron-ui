import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import rootReducer from "./slices";

const store = configureStore({
  reducer: rootReducer,
});

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { store, dispatch, useSelector, useDispatch };
