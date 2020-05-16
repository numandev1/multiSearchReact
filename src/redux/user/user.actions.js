import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setAuthToken = token => ({
  type: UserActionTypes.SET_AUTH_TOKEN,
  payload: token
});