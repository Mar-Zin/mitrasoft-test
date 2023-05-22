import { postsActions } from "./slice";
import { call, put, take, takeLatest } from "redux-saga/effects";
import { PostType } from "../../../types/api";
import { getPosts, getPostsByUserId } from "../../api/posts";

function* getPostsSaga() {
  try {
    const posts: PostType[] = yield call(getPosts);

    yield put(postsActions.success(posts));
  } catch (e) {
    yield put(postsActions.failure());
  }
}

function* getPostsByUserIdSaga(userId: number) {
    try {
      const posts: PostType[] = yield call(getPostsByUserId, userId);
      
      yield put(postsActions.success(posts));
    } catch (e) {
      yield put(postsActions.failure());
    }
  }

export function* watchPostsSaga() {
    yield takeLatest(postsActions.request.type, getPostsSaga);

    while (true) {
        const { payload } = yield take(postsActions.requestByUserId.type);
        yield call(
            getPostsByUserIdSaga,
            Number(payload.userId)
        );
      }
}
