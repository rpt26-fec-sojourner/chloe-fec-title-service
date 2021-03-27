import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
const titleURL = 'http://localhost:5500';
const reviewURL = 'http://localhost:1969';
import Name from '../src/components/ListingName.jsx';
import Reviews from '../src/components/ListingReviews.jsx';
import Location from '../src/components/ListingLocation.jsx';
import Superhost from '../src/components/Superhost.jsx';
import ShareButton from '../src/components/ShareButton.jsx';
import SaveButton from '../src/components/SaveButton.jsx';
import axios from 'axios';
import styled from 'styled-components';

const StyledName = styled.h1`
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  font-style: normal;
  font-size: 26px;
  font-weight: 600;
  line-height:30px;
  color: #222222;
`;


const StyledButtons = styled.button`
  border: none;
  background-color: white;
  float: right;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingID: 1,
      listingName: '',
      listingLocation: '',
      stars: '',
      reviews: '',
      superhost: false
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
            listingLocation: response.data.listingLocation,
            superhost: (id % 2 === 0 ? true : false)
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
        <StyledName>
          <Name name={this.state.listingName}></Name>
        </StyledName>
        <>
          <Reviews stars={this.state.stars} reviews={this.state.reviews} ></Reviews>
          <Superhost superhost={this.state.superhost}></Superhost>
          <Location location={this.state.listingLocation}></Location>
        </>
        <StyledButtons>
          <SaveButton></SaveButton>
        </StyledButtons>
        <StyledButtons>
          <ShareButton></ShareButton>
        </StyledButtons>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('title'));
