import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.FETCH_LIST_THREADS:
      return action.payload.threads;
    default:
      return threads;
  }
}

export default threadsReducer;
