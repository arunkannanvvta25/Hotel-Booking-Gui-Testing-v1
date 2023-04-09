import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import FeedbackContainer from "../components/FeedbackContainer";

class Feedback extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero hero="roomsHero">
          <Banner title="Feedback">            
              Provide your valuable feedback. 
          </Banner>
        </Hero>

        <FeedbackContainer />
      </div>
    );
  }
}

export default Feedback;
