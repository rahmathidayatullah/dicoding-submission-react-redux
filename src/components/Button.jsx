import React from 'react';
import { string, func } from 'prop-types';

function Button({ children, handleClick, className }) {
  return (
    <button
      className={`btn btn-primary ${className}`}
      type="button"
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: string.isRequired,
  handleClick: func.isRequired,
  className: string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
