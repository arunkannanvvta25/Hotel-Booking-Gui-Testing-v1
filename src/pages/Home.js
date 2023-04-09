import React, { Component } from "react";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeaturedRooms from "../components/FeaturedRooms";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero>
          <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>

        <Services />

        <FeaturedRooms />
      </div>
    );
  }
}

export default Home;
