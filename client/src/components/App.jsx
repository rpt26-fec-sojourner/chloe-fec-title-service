import React from 'react';
const arr = window.location.href.split(':');
const rootURL = `${arr[0]}:${arr[1]}`;
const titlePort = 5500;
const reviewPort = 1969;

const titleURL = rootURL === 'http://localhost' ? `http://localhost:${titlePort}` : `${rootURL}:${titlePort}`;
const reviewURL = rootURL === 'http://localhost' ? `https://localhost:${reviewPort}` : `${rootURL}:${reviewPort}`;
import Name from './ListingName.jsx';
import Reviews from './ListingReviews.jsx';
import Location from './ListingLocation.jsx';
import Superhost from './Superhost.jsx';
import ShareButton from './ShareButton.jsx';
import SaveButton from './SaveButton.jsx';
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
  background-color: #FFFFFF;
  float: right;
  color: #000000;
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
      superhost: false,
      saved: false
    };

    this.getTitle = this.getTitle.bind(this);
    this.getReviews = this.getReviews.bind(this);
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
          console.log('res: ', response);
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
        <StyledName >
          <Name name={this.state.listingName}></Name>
        </StyledName>
        <>
          <Reviews stars={this.state.stars} reviews={this.state.reviews} ></Reviews>
          <Superhost superhost={this.state.superhost}></Superhost>
          <Location location={this.state.listingLocation}></Location>
        </>
        <StyledButtons>
          <SaveButton ></SaveButton>
        </StyledButtons>
        <StyledButtons>
          <ShareButton></ShareButton>
        </StyledButtons>
      </div>
    );
  }
}

export default App;
