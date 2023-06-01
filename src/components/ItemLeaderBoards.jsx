import React from 'react';
import { string, number, shape } from 'prop-types';
import Initials from './Initials';
import getInitials from '../utils/index';

function ItemLeaderBoards({ leaderboards }) {
  return (
    <div className="item-leaderboard">
      <div className="item-leaderboard__list">
        <Initials
          className="big-initial"
          initial={getInitials(leaderboards.user.name)}
        />
        <p className="item-leaderboard__list__name">{leaderboards.user.name}</p>
      </div>
      <p className="item-leaderboard__score">{leaderboards.score}</p>
    </div>
  );
}

const userShapes = {
  avatar: string.isRequired,
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
};

const leaderBoardsItemShape = {
  index: number,
  score: number.isRequired,
  user: shape(userShapes),
};

ItemLeaderBoards.propTypes = {
  leaderboards: shape(leaderBoardsItemShape),
};

ItemLeaderBoards.defaultProps = {
  leaderboards: {},
};

export { leaderBoardsItemShape, userShapes };

export default ItemLeaderBoards;
