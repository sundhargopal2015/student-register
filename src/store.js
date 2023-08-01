import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware,
});

sagaMiddleware.run(rootSaga);
