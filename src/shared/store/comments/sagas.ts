import { commentsActions } from "./slice";
import { call, put, take} from "redux-saga/effects";
import { CommentsType } from "../../../types/api";
import { getComments } from "../../api/comments";

function* getCommentsSaga(postId:CommentsType['postId']) {
  try {
    const comments: CommentsType[] = yield call(getComments, postId);

    yield put(commentsActions.success(comments));
  } catch (e) {
    yield put(commentsActions.failure());
  }
}

export function* watchCommentsSaga() {
    while (true) {
        const { payload } = yield take(commentsActions.request.type);
        yield call(
            getCommentsSaga,
            payload.postId
        );
      }

}
