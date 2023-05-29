import api from '../../utils/api';

const ActionType = {
  FETCH_LIST_THREADS: 'FETCH_LIST_THREADS',
  RECEIVE_COMMENT: 'RECEIVE_COMMENT',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.FETCH_LIST_THREADS,
    payload: {
      threads,
    },
  };
}

function fetchThreads() {
  return async (dispatch) => {
    try {
      const threads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(`${error.message} login terlebih dahulu`);
    }
  };
}

export { ActionType, fetchThreads, receiveThreadsActionCreator };
