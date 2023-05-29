import React from 'react';
import { string } from 'prop-types';

function Initials({ className, initial }) {
  return (
    <div className={`initials ${className}`}>
      <h3 className="initials__title">{initial}</h3>
    </div>
  );
}

Initials.propTypes = {
  className: string,
  initial: string.isRequired,
};

Initials.defaultProps = {
  className: '',
};

export default Initials;
