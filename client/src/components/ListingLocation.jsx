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

const Location = (props) => {
  return (
    <span>
      <span>    </span>
      <StyledLocation>
        {props.location}
      </StyledLocation>
    </span>
  );
};

export default Location;

