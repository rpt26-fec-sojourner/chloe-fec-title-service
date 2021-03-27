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
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #717171;
`;


const Reviews = (props) => {
  return (
    <span>
      <StyledStar>
        <FontAwesomeIcon icon={faStar}/>
        <span> </span>
      </StyledStar>
      <StyledStarAvg>
        {props.stars}
        <span>  </span>
      </StyledStarAvg>
      <StyledReviews>
        ({props.reviews})
        <span>  </span>
      </StyledReviews>
    </span>
  );
};

export default Reviews;

