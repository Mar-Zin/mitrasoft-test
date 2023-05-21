import { fork } from "redux-saga/effects";
import { watchPostsSaga } from "./posts";
import { watchCommentsSaga } from "./comments/sagas";

export function* rootSaga() {
  yield fork(watchPostsSaga);
  yield fork(watchCommentsSaga)
}
