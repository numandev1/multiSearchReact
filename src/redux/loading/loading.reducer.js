import { LoadingActionTypes } from './loading.types';

const INITIAL_STATE = {
  active: false,
  text: 'Loading ...',
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoadingActionTypes.SET_ACTIVE_FLAG:
      return {
        ...state,
        active: action.payload
      };
    case LoadingActionTypes.SET_TEXT:
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
};

export default loadingReducer;
