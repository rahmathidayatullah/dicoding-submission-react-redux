import api from '../../utils/api';

const ActionType = {
  RECEIVE_LIST_LEADERBOARDS: 'RECEIVE_LIST_LEADERBOARDS',
};

function receiveLeaderBoardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LIST_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function fetchLeaderBoards() {
  return async (dispatch) => {
    try {
      const leaderboards = await api.getAllLeaderBoards();
      dispatch(receiveLeaderBoardsActionCreator(leaderboards));
    } catch (error) {
      alert(error.message);
    }
  };
}

export { ActionType, receiveLeaderBoardsActionCreator, fetchLeaderBoards };
