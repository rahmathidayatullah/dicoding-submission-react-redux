import api from '../../utils/api';
import asyncPopulateUsersAndThreads from '../shared/action';
import { fetchThreadDetail } from '../threadDetail/action';

const ActionType = {
  RECEIVE_TYPE_UP_VOTE: 'RECEIVE_TYPE_UP_VOTE',
  RECEIVE_TYPE_DOWN_VOTE: 'RECEIVE_TYPE_DOWN_VOTE',
  RECEIVE_TYPE_NEUTRAL_VOTE: 'RECEIVE_TYPE_NEUTRAL_VOTE',
  RECEIVE_TYPE_UP_VOTE_COMMENT: 'RECEIVE_TYPE_UP_VOTE_COMMENT',
  RECEIVE_TYPE_DOWN_VOTE_COMMENT: 'RECEIVE_TYPE_DOWN_VOTE_COMMENT',
  RECEIVE_TYPE_NEUTRAL_VOTE_COMMENT: 'RECEIVE_TYPE_NEUTRAL_VOTE_COMMENT',
};

function upVoteThread(id) {
  return async (dispatch) => {
    try {
      await api.upVoteThread(id);
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error) {
      alert(error.message);
    }
  };
}
function downVoteThread(id) {
  return async (dispatch) => {
    try {
      await api.downVoteThread(id);
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error) {
      alert(error.message);
    }
  };
}
function neutralizeVoteThread(id) {
  return async (dispatch) => {
    try {
      await api.neutralVoteThread(id);
      dispatch(asyncPopulateUsersAndThreads());
    } catch (error) {
      alert(error.message);
    }
  };
}
function upVoteComment(id, idComment) {
  return async (dispatch) => {
    try {
      await api.upVoteComment(id, idComment);
      dispatch(fetchThreadDetail(id));
    } catch (error) {
      alert(error.message);
    }
  };
}
function downVoteComment(id, idComment) {
  return async (dispatch) => {
    try {
      await api.downVoteComment(id, idComment);
      dispatch(fetchThreadDetail(id));
    } catch (error) {
      alert(error.message);
    }
  };
}
function neutralizeVoteComment(id, idComment) {
  return async (dispatch) => {
    dispatch(fetchThreadDetail(id));
    try {
      await api.neutralVoteComment(id, idComment);
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  upVoteThread,
  downVoteThread,
  neutralizeVoteThread,
  upVoteComment,
  downVoteComment,
  neutralizeVoteComment,
};
