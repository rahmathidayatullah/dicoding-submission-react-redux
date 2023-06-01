import React from 'react';
import { number, func } from 'prop-types';

import { AiTwotoneDislike, AiOutlineDislike } from 'react-icons/ai';

function ButtonDislike({ nbrDLK, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="btn-action"
      style={{ position: 'relative', top: '1px' }}
    >
      {nbrDLK !== 0 ? (
        <AiTwotoneDislike size={18} />
      ) : (
        <AiOutlineDislike size={18} />
      )}
      <span>{nbrDLK}</span>
    </button>
  );
}

ButtonDislike.propTypes = {
  nbrDLK: number.isRequired,
  handleClick: func.isRequired,
};

export default ButtonDislike;
