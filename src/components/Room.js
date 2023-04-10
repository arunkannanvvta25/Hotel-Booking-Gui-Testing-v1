import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Room extends Component {
  state = {};

  render() {
    const { name, slug, price, images } = this.props.room;
    return (
      <article className="room">
        <div className="img-container" id="imgContainerid">
          <img src={images[0]} alt={`${slug} Room`} />
          <div className="price-top">
            <h6 id={"idIS"+images[0].split("/")[4]}>${price}</h6>
            <p>per night</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link" >
            Details
          </Link>
        </div>
        <p className="room-info">{name}</p>
      </article>
    );
  }
}

// Room.propTypes = {
//   name: PropTypes.array,
//   slug: PropTypes.string,
//   price: PropTypes.number,
//   images: PropTypes.arrayOf(PropTypes.string),
// };

export default Room;
