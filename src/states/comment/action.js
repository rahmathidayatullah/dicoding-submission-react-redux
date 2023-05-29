import api from '../../utils/api';
import { fetchThreadDetail } from '../threadDetail/action';

const ActionType = {
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
};

function receiveCommentActionCreator(comment) {
  return {
    type: ActionType.RECEIVE_COMMENT,
    payload: {
      comment,
    },
  };
}

function commentThread(id, content) {
  return async (dispatch) => {
    try {
      const comment = await api.createComment(id, content);
      dispatch(receiveCommentActionCreator(comment));
      dispatch(fetchThreadDetail(id));
    } catch (error) {
      if (error.message === 'Bad HTTP authentication header format') {
        alert(`${error.message}, login terlebih dahulu`);
        window.location.href = '/login';
      } else {
        alert('Error server');
      }
    }
  };
}

export { ActionType, receiveCommentActionCreator, commentThread };
