import React from "react";
import Room from "./Room";

function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no such room found as per your parameters</h3>
      </div>
    );
  }
  return (
    <>
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map((room, index) => {
            return <Room key={index} room={room} />;
          })}
        </div>
      </section>
    </>
  );
}

export default RoomList;
