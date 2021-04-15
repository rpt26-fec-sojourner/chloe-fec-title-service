import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledStar = styled.span`
  style: normal;
  weight: 400;
  size: 18px;
  line-height: 20px;
  color: #ff385c;
`;

const StyledStarAvg = styled.span`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: #222222;
`;

const StyledReviews = styled.span`
  color: rgb(113, 113, 113);
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-left: 4px;
`;

const Container = styled.span`
  -webkit-box-align: center;
  min-width: 0px;
  margin-top: 8px;
  align-items: center;
  display: inline-flex;
`;

const Reviews = (props) => {
  return (
    <Container>
      <StyledStar>
        <FontAwesomeIcon icon={faStar}/>
        &nbsp;
      </StyledStar>
      <StyledStarAvg>
        {props.stars}
      </StyledStarAvg>
      <StyledReviews>
        ({props.reviews})&nbsp;·
      </StyledReviews>
    </Container>
  );
};

export default Reviews;

