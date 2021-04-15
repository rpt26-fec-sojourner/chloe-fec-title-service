import React from 'react';
import styled from 'styled-components';

const StyledLocation = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #717171;
  text-decoration: underline;
`;

const Container = styled.span`
  -webkit-box-align: center;
  min-width: 0px;
  margin-top: 8px;
  align-items: center;
  display: inline-flex;
`;

const Location = (props) => {
  return (
    <Container>
      &nbsp;
      <StyledLocation>
        {props.location}
      </StyledLocation>
    </Container>
  );
};

export default Location;

