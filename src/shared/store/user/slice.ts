import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../../types/api";

type RequestParams = {
    userId: string | undefined
}

type UserStateType = {
  user: UserType | null;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: UserStateType = {
    user: null,
    isLoading: false,
    hasError: false,
};

const NAME = "user";

const request: CaseReducer<UserStateType, PayloadAction<RequestParams>> = (
  state
) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<UserStateType, PayloadAction<UserType>> = (
  state,
  { payload }
) => {
  state.isLoading = false;
  state.user = payload
};

const failure: CaseReducer<UserStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};



export const { actions: userActions, reducer: userReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
