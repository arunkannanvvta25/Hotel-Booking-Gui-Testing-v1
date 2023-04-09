import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

import RoomContext from "../context";
import { useContext } from "react";

function RoomContainer() {
  const { rooms, sortedRooms } = useContext(RoomContext);

  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default RoomContainer;
