import React from 'react';

const Review = (props) => {
  return (
    <div>
      <div>{props.stars}</div>
      <div>{props.reviews}</div>
    </div>
  );
};

export default Review;