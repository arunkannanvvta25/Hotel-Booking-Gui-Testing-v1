import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

function NotFound() {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not Found">
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </Banner>
    </Hero>
  );
}

export default NotFound;
