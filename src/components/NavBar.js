import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";

class NavBar extends Component {
  state = { isOpenMenu: false };

  handleNavIcon = () => this.setState({ isOpenMenu: !this.state.isOpenMenu });

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <Link to={{ pathname: "/" }}>
                <img src={logo} alt="Hotel Resort" />
              </Link>
              <button
                className="nav-btn"
                type="button"
                onClick={this.handleNavIcon}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </div>
            <ul
              className={
                this.state.isOpenMenu ? "nav-links show-nav" : "nav-links"
              }
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms">Rooms</Link>
              </li>
              <li>
                <Link to="/feedback">Feedback</Link>
              </li>
              <li>
                <Link to="/" >Search </Link>
              </li>
            </ul>
            {/* <label className="Nav-Search-Text nav-links">Search</label> */}
            <input type="text" className="Nav-SearchBox"></input>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
