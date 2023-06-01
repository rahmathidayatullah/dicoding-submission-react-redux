import React from 'react';
import { string } from 'prop-types';

function ButtonCategory({ category }) {
  return (
    <button type="button" className="thread-item-cateogry">
      <p>
        #
        {category}
      </p>
    </button>
  );
}

ButtonCategory.propTypes = {
  category: string.isRequired,
};

export default ButtonCategory;
