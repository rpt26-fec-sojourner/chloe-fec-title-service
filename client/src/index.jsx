import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
const titleURL = 'http://localhost:5500';
const reviewURL = 'http://localhost:1969';
import Name from '../src/components/ListingName.jsx';
import Location from '../src/components/ListingLocation.jsx';
import Review from '../src/components/ListingReviews.jsx';
import Button from '../src/components/Buttons.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingID: 1,
      listingName: '',
      listingLocation: '',
      stars: '',
      reviews: ''
    };

    this.getTitle = this.getTitle.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    let id = window.location.href.split('/').pop() || 1;

    this.getTitle(id);
    this.getReviews(id);
  }

  getTitle (id) {
    if (id) {
      axios.get(`${titleURL}/title/${id}`)
        .then((response) => {
          this.setState({
            listingID: id,
            listingName: response.data.listingName,
            listingLocation: response.data.listingLocation
          });
        })
        .catch((err) => {
          console.log('GET response error: ', err);
        });
    }
  }

  getReviews (id) {
    axios.get(`${reviewURL}/average/${id}`)
      .then((response) => {
        console.log('res: ', response);
        this.setState({
          stars: response.data.stars,
          reviews: response.data.total
        });
      })
      .catch((err) => {
        console.log('getReviews error: ', err);

        this.setState({
          stars: 0,
          reviews: 0
        });
      });
  }

  render () {
    return (
      <div>
        <Name name={this.state.listingName}/>
        <Location location={this.state.listingLocation} />
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
