import React from 'react';

const Name = (props) => {

  // useEffect(() => {
  //   fetch('/title/:listing_id')
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log('res: ', res);
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       console.log('data: ', data);
  //     });
  // });

  return (
    <div>{props.name}</div>
  );
};

export default Name;