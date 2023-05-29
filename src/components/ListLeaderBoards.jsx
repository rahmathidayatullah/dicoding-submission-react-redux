import React from 'react';
import { arrayOf, shape } from 'prop-types';
import ItemLeaderBoards, { leaderBoardsItemShape } from './ItemLeaderBoards';

function ListLeaderBoards({ leaderboards }) {
  return (
    <div className="list-leaderboards">
      <div className="list-leaderboards__list">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>
      {leaderboards.map((items, index) => {
        return <ItemLeaderBoards key={index} leaderboards={items} />;
      })}
    </div>
  );
}

ListLeaderBoards.propTypes = {
  leaderboards: arrayOf(shape(leaderBoardsItemShape)).isRequired,
};

export default ListLeaderBoards;
