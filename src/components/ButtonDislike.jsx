import React from 'react';
import { number, func } from 'prop-types';

import { AiTwotoneDislike, AiOutlineDislike } from 'react-icons/ai';

function ButtonDislike({ number, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="btn-action"
      style={{ position: 'relative', top: '1px' }}
    >
      {number !== 0 ? (
        <AiTwotoneDislike size={18} />
      ) : (
        <AiOutlineDislike size={18} />
      )}
      <span>{number}</span>
    </button>
  );
}

ButtonDislike.propTypes = {
  number: number.isRequired,
  handleClick: func.isRequired,
};

export default ButtonDislike;
