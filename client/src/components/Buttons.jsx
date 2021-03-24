import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Button = (props) => {
  return (
    <div>
      <button><FontAwesomeIcon icon={faSignOutAlt} transform={{ rotate: 270 }} /> Share</button>
      <button>♡ Save</button>
    </div>
  );
};

export default Button;


