import React from 'react';

const Name = ({ match }) => {
  console.log('match.params: ', match.params);

  useEffect(() => {
    fetch('/title/:listing_id')
      .then((res) => {
        if (res.ok) {
          console.log('res: ', res);
          return res.json();
        }
      })
      .then((data) => {
        console.log('data: ', data);
      });
  });

  return (
    <div>{match.params.listing_id}</div>
  );
};

export default Name;