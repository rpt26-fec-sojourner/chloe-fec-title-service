import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import $ from 'jquery';
const ajaxURL = 'http://localhost:3000';
import axios from 'axios';
import Name from '../src/components/ListingName.jsx';
import Location from '../src/components/ListingLocation.jsx';

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
    // this.generateTitle(this.state.listingID);
  }

  generateTitle (id) {

    // useEffect(() => {
    //   fetch('/title/:listing_id')
    //     .then((res) => {
    //       if (res.ok) {
    //         console.log('res: ', res);
    //         // return res.json();
    //       }
    //     })
    //     .then((data) => {
    //       console.log('data: ', data);
    //     });
    // });

    // $.ajax({
    //   type: 'GET',
    //   url: `${ajaxURL}/title/${id}`,
    //   success: (res) => {
    //     console.log('Successful GET response: ', res);
    //     this.setState({listingName: res.listingName, listingLocation: res.listingLocation});
    //   },
    //   error: (err) => {
    //     console.log('GET response error: ', err);
    //   }
    // });

    // axios.get()
  }

  render () {
    return (
      <Router>
        <Route path="/title/:listing_id">
          <Name />
          <Location />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));