// import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  DETAIL_THREAD: 'DETAIL_THREAD',
};

function receiveThreadActionCreator(thread) {
  return {
    type: ActionType.DETAIL_THREAD,
    payload: {
      thread,
    },
  };
}

function fetchThreadDetail(id) {
  return async (dispatch) => {
    // dispatch(showLoading());
    try {
      const threads = await api.getDetailThread(id);
      dispatch(receiveThreadActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    // dispatch(hideLoading());
  };
}

export { ActionType, fetchThreadDetail, receiveThreadActionCreator };
