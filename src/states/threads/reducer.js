import { ActionType } from './action';

const initialState = {
  threads: [],
  successCreate: false,
};

function threadsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionType.FETCH_LIST_THREADS:
      return {
        ...state,
        threads: action.payload.threads,
      };
    case ActionType.SUCCESS_CREATE_THREAD:
      return {
        ...state,
        successCreate: true,
      };
    case 'RESET_STATUS':
      return {
        ...state,
        successCreate: null,
      };
    default:
      return state;
  }
}

export default threadsReducer;
