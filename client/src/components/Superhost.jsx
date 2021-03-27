import React from 'react';
import styled from 'styled-components';

const StyledSuperhost = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #717171;
`;

const Superhost = (props) => {
  const display = props.superhost ? '  · Superhost ·  ' : '·  ';

  return (
    <StyledSuperhost>
      {display}
    </StyledSuperhost>
  );
};

export default Superhost;

