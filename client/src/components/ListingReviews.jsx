import React from 'react';

const ReviewsLocation = (props) => {
  const display = props.superhost ? `★ ${props.stars} (${props.reviews}) · Superhost · ${props.location}` : `★ ${props.stars} (${props.reviews}) · ${props.location}`;

  return (
    <div>
      <div>{display} </div>
    </div>
  );
};

export default ReviewsLocation;

