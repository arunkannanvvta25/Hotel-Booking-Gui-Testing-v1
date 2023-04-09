import React from "react";
import Title from "./Title";
import { useContext } from "react";
import RoomContext from "../context";
import LoadingGif from "./LoadingGif";
import Room from "./Room";

// Functional Component
function FeaturedRooms() {
  const { featuredRooms: rooms, loading } = useContext(RoomContext);
  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <LoadingGif />
        ) : (
          rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })
        )}
      </div>
    </section>
  );
}

export default FeaturedRooms;
