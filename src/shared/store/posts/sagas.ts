import { postsActions } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";
import { PostType } from "../../../types/api";
import { getPosts } from "../../api/posts";

function* getPostsSaga() {
  try {
    const quizzes: PostType[] = yield call(getPosts);

    yield put(postsActions.success(quizzes));
  } catch (e) {
    yield put(postsActions.failure());
  }
}

export function* watchPostsSaga() {
    yield takeLatest(postsActions.request.type, getPostsSaga);

}
