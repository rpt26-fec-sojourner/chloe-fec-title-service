import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledSave = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #000000;
  text-decoration: underline;
`;

const SaveButton = (props) => {
  return (
    <span>
      <FontAwesomeIcon icon={faHeart} />
      <span>  </span>
      <StyledSave>
        Save
      </StyledSave>
    </span>
  );
};

export default SaveButton;

