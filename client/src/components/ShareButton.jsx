import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledShare = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #000000;
  text-decoration: underline;
`;

const ShareButton = (props) => {
  return (
    <span>
      <FontAwesomeIcon icon={faSignOutAlt} transform={{ rotate: 270 }} />
      <span>  </span>
      <StyledShare>
        Share
      </StyledShare>
    </span>
  );
};

export default ShareButton;


