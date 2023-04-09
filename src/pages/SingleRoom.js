import React, { Component } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { SingleRoomHOC } from "../context";
import RoomContext from "../context";
import StyledHero from "../components/StyledHero";

// Class-based Components
class SingleRoom extends Component {
  state = {};

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const { slug } = this.props.slug;
    const room = getRoom(slug);

    const {
      name,
      images,
      description,
      price,
      size,
      capacity,
      pets,
      breakfast,
      extras,
    } = room;
    const [main, ...defaultBcg] = images;
    return (
      <div>
        <StyledHero image={main}>
          <Banner title={`${name} room`}>
            <Link to="/booked" className="btn-primary">
              Book
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultBcg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
        </section>

        <section className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>Info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? `pets allowed` : `pets not allowed`}</h6>
            <h6>{breakfast && `free breakfast included`}</h6>
          </article>
        </section>

        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((e, i) => (
              <li key={i}>- {e}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default SingleRoomHOC(SingleRoom);
