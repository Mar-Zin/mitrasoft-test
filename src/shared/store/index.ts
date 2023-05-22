import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { postsReducer } from "./posts";
import { rootSaga } from "./root-saga";
import { commentsReducer } from "./comments";
import { userReducer } from "./user/slice";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: { posts: postsReducer, comments: commentsReducer, user: userReducer },
  middleware: middlewares,
});

sagaMiddleware.run(rootSaga);

export type ApplicationState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> =
  useSelector;