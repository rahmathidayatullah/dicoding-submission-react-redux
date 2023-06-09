import React from 'react';
import { string, func } from 'prop-types';

function Button({
  children, handleClick, className, type,
}) {
  return (
    <button
      className={`btn btn-primary ${className}`}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: string.isRequired,
  handleClick: func,
  className: string,
  type: string,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  handleClick: () => null,
};

export default Button;
