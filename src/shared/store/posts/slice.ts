import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "../../../types/api";



type PostsStateType = {
  posts: PostType[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: PostsStateType = {
    posts: [],
    isLoading: false,
    hasError: false,
};

const NAME = "posts";

const request: CaseReducer<PostsStateType> = (
  state
) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<PostsStateType, PayloadAction<PostType[]>> = (
  state,
  { payload }
) => {
  state.isLoading = false;
  state.posts = payload;
};

const failure: CaseReducer<PostsStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};



export const { actions: postsActions, reducer: postsReducer } = createSlice({
  name: NAME,
  initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
