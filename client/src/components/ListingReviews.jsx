import React from 'react';

const ReviewsLocation = (props) => {
  return (
    <div>
      <div>{`★ ${props.stars} (${props.reviews}) · ${props.location}`} </div>
    </div>
  );
};

export default ReviewsLocation;

