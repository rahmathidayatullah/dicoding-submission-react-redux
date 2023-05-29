import { ActionType } from './action';

function threadReducer(threads = null, action = {}) {
  switch (action.type) {
    case ActionType.DETAIL_THREAD:
      return action.payload.thread;
    default:
      return threads;
  }
}

export default threadReducer;
