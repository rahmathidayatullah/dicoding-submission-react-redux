import React from 'react';
import { number, func } from 'prop-types';

import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';

function ButtonLike({ nbrLK, handleClick }) {
  return (
    <button type="button" onClick={handleClick} className="btn-action">
      {nbrLK !== 0 ? <AiTwotoneLike size={18} /> : <AiOutlineLike size={18} />}
      <span>{nbrLK}</span>
    </button>
  );
}

ButtonLike.propTypes = {
  nbrLK: number.isRequired,
  handleClick: func.isRequired,
};

export default ButtonLike;
