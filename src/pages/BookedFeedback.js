import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import FeedbackContainer from "../components/FeedbackContainer";

class BookedFeedback extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero hero="roomsHero">
          <Banner title="Your room is booked.">            
          Enjoy your booking with us. Please provide your valuable feedback below.
          </Banner>
        </Hero>

        <FeedbackContainer />
      </div>
    );
  }
}

export default BookedFeedback;
