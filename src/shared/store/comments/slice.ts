import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentsType } from "../../../types/api";

type RequestParams = {
    postId: number
}


type CommentsStateType = {
  comments: CommentsType[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: CommentsStateType = {
    comments: [],
    isLoading: false,
    hasError: false,
};

const NAME = "comments";

const request: CaseReducer<CommentsStateType, PayloadAction<RequestParams>> = (
  state
) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<CommentsStateType, PayloadAction<CommentsType[]>> = (
  state,
  { payload }
) => {
  state.isLoading = false;
  state.comments.push(...payload)
};

const failure: CaseReducer<CommentsStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};



export const { actions: commentsActions, reducer: commentsReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
