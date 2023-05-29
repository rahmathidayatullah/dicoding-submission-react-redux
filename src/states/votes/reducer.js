import { ActionType } from './action';


// RECEIVE_TYPE_UP_VOTE: 'RECEIVE_TYPE_UP_VOTE',
//   RECEIVE_TYPE_DOWN_VOTE: 'RECEIVE_TYPE_DOWN_VOTE',
//   RECEIVE_TYPE_NEUTRAL_VOTE: 'RECEIVE_TYPE_NEUTRAL_VOTE',
//   RECEIVE_TYPE_UP_VOTE_COMMENT: 'RECEIVE_TYPE_UP_VOTE_COMMENT',
//   RECEIVE_TYPE_DOWN_VOTE_COMMENT: 'RECEIVE_TYPE_DOWN_VOTE_COMMENT',
//   RECEIVE_TYPE_NEUTRAL_VOTE_COMMENT: 'RECEIVE_TYPE_NEUTRAL_VOTE_COMMENT',

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH_USER:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
