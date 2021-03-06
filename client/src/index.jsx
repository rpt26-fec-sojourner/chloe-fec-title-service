import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const ajaxURL = 'http://localhost:3000';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingID: 1
    };

    this.getTitle = this.getTitle.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    this.getTitle(this.state.listingID);
  }

  getTitle (id) {
    $.ajax({
      type: 'GET',
      url: `${ajaxURL}/title/${id}`,
      success: (res) => {
        console.log('Successful GET response: ', res);
      },
      error: (err) => {
        console.log('GET response error: ', err);
      }
    });
  }

  render () {
    return (
      <div>Hello World!!</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));