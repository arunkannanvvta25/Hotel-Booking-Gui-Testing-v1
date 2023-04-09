import React, { Component } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import RoomContainer from "../components/RoomContainer";

class Rooms extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              Return to Home
            </Link>
          </Banner>
        </Hero>

        <RoomContainer />
      </div>
    );
  }
}

export default Rooms;
