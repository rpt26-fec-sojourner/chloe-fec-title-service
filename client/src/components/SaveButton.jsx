import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regFaHeart } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

const StyledHeart = styled.span`
  color: ${(props) => {
    if (props.saved) {
      return '#ff385c';
    }
  }};
`;

const StyledSave = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #000000;
  text-decoration: underline;
  display: inline-block;
  position: relative;
  text-align: center;
  padding: 8px;
  background: transparent;
`;

const SaveButton = (props) => {
  let heartIcon = regFaHeart;

  if (props.saved) {
    heartIcon = solidFaHeart;
  }

  return (
    <div>
      <span>
        <StyledHeart >
          <FontAwesomeIcon icon={heartIcon} />
        </StyledHeart>
        <span>  </span>
        <StyledSave >
          Save
        </StyledSave>
      </span>
    </div>
  );
};

export default SaveButton;

