import { LoadingActionTypes } from './loading.types';

export const setActiveFlag = active => ({
  type: LoadingActionTypes.SET_ACTIVE_FLAG,
  payload: active
});

export const setText = text => ({
  type: LoadingActionTypes.SET_TEXT,
  payload: text
});