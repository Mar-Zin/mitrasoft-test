import { ApplicationState } from "../index";

export const commentSelector = (state: ApplicationState) => state.comments

export const commentsSelector = (state: ApplicationState) =>
    commentSelector(state).comments;
export const isLoadingCommentsSelector = (state: ApplicationState) =>
    commentSelector(state).isLoading;
export const hasErrorCommentsSelector = (state: ApplicationState) =>
    commentSelector(state).hasError;
