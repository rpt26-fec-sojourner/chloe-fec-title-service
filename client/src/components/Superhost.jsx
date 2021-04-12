import React from 'react';
import styled from 'styled-components';
import superhostBadge from '../assets/AirBnB_Superhost_Icon.png';

const StyledSuperhost = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #717171;
  display: inline-block;
`;

const Superhost = (props) => {
  const superhostDisplay = props.superhost ?
    <StyledSuperhost>
      <img src={superhostBadge} />
      <span>    Superhost   ·</span>
    </StyledSuperhost> :
    <StyledSuperhost>
    </StyledSuperhost>;

  return (
    <span>
      <span>    </span>
      {superhostDisplay}
    </span>
  );
};

export default Superhost;

