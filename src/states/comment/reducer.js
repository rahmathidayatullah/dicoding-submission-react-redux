import { ActionType } from './action';

function commentReducer(comment = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_COMMENT:
      return action.payload.comment;
    default:
      return comment;
  }
}

export default commentReducer;
