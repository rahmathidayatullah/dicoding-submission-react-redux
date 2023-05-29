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
    try {
      const threads = await api.getDetailThread(id);
      dispatch(receiveThreadActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, fetchThreadDetail, receiveThreadActionCreator };
