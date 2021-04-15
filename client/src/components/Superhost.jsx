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

const Container = styled.span`
  -webkit-box-align: center;
  min-width: 0px;
  margin-top: 8px;
  align-items: center;
  display: inline-flex;
`;

const Superhost = (props) => {
  const superhostDisplay = props.superhost ?
    <StyledSuperhost>
      &nbsp;
      <img src={superhostBadge} alt="Superhost Badge"/>
      <span>&nbsp;Superhost&nbsp;·</span>
    </StyledSuperhost> :
    <StyledSuperhost>
      <span>&nbsp;</span>
    </StyledSuperhost>;

  return (
    <Container>
      {superhostDisplay}
    </Container>
  );
};

export default Superhost;

