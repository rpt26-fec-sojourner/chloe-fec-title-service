import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const ajaxURL = 'http://localhost:3000';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingID: 1,
      listingName: '',
      listingLocation: ''
    };

    this.generateTitle = this.generateTitle.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    this.generateTitle(this.state.listingID);
  }

  generateTitle (id) {
    $.ajax({
      type: 'GET',
      url: `${ajaxURL}/title/${id}`,
      success: (res) => {
        console.log('Successful GET response: ', res);
        this.setState({listingName: res.listingName, listingLocation: res.listingLocation});
      },
      error: (err) => {
        console.log('GET response error: ', err);
      }
    });
  }

  render () {
    return (
      <div>{this.state.listingName}</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));