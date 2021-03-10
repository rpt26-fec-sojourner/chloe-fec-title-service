import React, { useState } from 'react';

const Name = (props) => {
  // const [name, setName] = useState('Chloe');
  console.log('url: ', window.location.href);
  console.log('props history: ', props.history);

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