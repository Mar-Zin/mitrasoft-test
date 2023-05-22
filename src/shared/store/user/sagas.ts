import {  userActions } from "./slice";
import { call, put, take} from "redux-saga/effects";
import { UserType } from "../../../types/api";
import { getUser } from "../../api/user";

function* getUserSaga(userId:UserType['id']) {
  try {
    const user: UserType = yield call(getUser, userId);
    yield put(userActions.success(user));
  } catch (e) {
    yield put(userActions.failure());
  }
}

export function* watchUserSaga() {
    while (true) {
        const { payload } = yield take(userActions.request.type);
        yield call(
            getUserSaga,
            Number(payload.userId)
        );
      }

}