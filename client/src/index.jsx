import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';
const ajaxURL = 'http://localhost:3000';
import Name from '../src/components/ListingName.jsx';
import Location from '../src/components/ListingLocation.jsx';
import axios from 'axios';

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
    let splitUrl = window.location.href.split('/');
    let id = splitUrl[splitUrl.length - 1];

    this.generateTitle(id);
  }

  generateTitle (id) {
    if (id) {
      console.log('id: ', id);
      axios.get(`${ajaxURL}/title/${id}`)
        .then((response) => {
          console.log('response: ', response);
        })
        .catch((err) => {
          console.log('GET response error: ', err);
        });
    } else {
      this.setState({listingID: 1});
    }
  }

  render () {
    return (
      <div>
        <Name name={this.example()}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));