import { ApplicationState } from "../index";

export const postSelector = (state: ApplicationState) => state.posts

export const postsSelector = (state: ApplicationState) =>
    postSelector(state).posts;
export const isLoadingSelector = (state: ApplicationState) =>
    postSelector(state).isLoading;
export const hasErrorSelector = (state: ApplicationState) =>
    postSelector(state).hasError;
