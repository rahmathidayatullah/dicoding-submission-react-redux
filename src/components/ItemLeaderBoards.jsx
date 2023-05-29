import React from 'react';
import Initials from './Initials';
import { string, number, shape } from 'prop-types';
import { getInitials } from '../utils/index';

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

const leaderBoardsItemShape = {
  score: number.isRequired,
  user: shape({
    avatar: string.isRequired,
    email: string.isRequired,
    id: string.isRequired,
    name: string.isRequired,
  }),
};

ItemLeaderBoards.propTypes = {
  leaderboards: shape(leaderBoardsItemShape),
};

export { leaderBoardsItemShape };

export default ItemLeaderBoards;
