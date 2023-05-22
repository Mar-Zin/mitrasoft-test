import { ApplicationState } from "../index";

export const userInfoSelector = (state: ApplicationState) => state.user

export const userSelector = (state: ApplicationState) =>
    userInfoSelector(state).user;
export const isLoadingUserSelector = (state: ApplicationState) =>
    userInfoSelector(state).isLoading;
export const hasErrorUserSelector = (state: ApplicationState) =>
    userInfoSelector(state).hasError;
