import React from 'react';
import { number, func } from 'prop-types';

import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai';

function ButtonLike({ number, handleClick }) {
  return (
    <button onClick={handleClick} className="btn-action">
      {number !== 0 ? <AiTwotoneLike size={18} /> : <AiOutlineLike size={18} />}
      <span>{number}</span>
    </button>
  );
}

ButtonLike.propTypes = {
  number: number.isRequired,
  handleClick: func.isRequired,
};

export default ButtonLike;
