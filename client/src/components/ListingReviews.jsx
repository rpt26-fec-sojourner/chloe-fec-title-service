import React from 'react';

const Review = (props) => {
  return (
    <div>
      <div>{`[insert star icon here] ${props.stars} (${props.reviews} reviews)`}</div>
      <div></div>
    </div>
  );
};

export default Review;