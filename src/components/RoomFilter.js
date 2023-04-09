import React from "react";
import RoomContext from "../context";
import { useContext } from "react";

function RoomFilter({ rooms }) {
  const getUniquetype = (rooms, value) => {
    return [...new Set(rooms.map((room) => room[value]))];
  };

  const {
    handleOptionChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);
  let roomTypeOptions = getUniquetype(rooms, "type");
  let capacityOptions = getUniquetype(rooms, "capacity");

  //   RoomType array with unique items
  roomTypeOptions = ["all", ...roomTypeOptions];

  //   Mapping roomtypes -> <option>
  roomTypeOptions = roomTypeOptions.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  capacityOptions = capacityOptions.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <>
      <section className="filter-container">
        <form className="filter-form">
          {/* roomtype */}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              className="form-control"
              value={type}
              onChange={(e) => handleOptionChange(e)}
            >
              {roomTypeOptions}
            </select>
          </div>
          {/* end */}

          {/* guest */}
          <div className="form-group">
            <label htmlFor="capacity">guest</label>
            <select
              name="capacity"
              id="capacity"
              className="form-control"
              value={capacity}
              onChange={(e) => handleOptionChange(e)}
            >
              {capacityOptions}
            </select>
          </div>
          {/* end */}

          {/* Price */}
          <div className="form-group">
            <label htmlFor="price">room price ${price}</label>
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={price}
              id="price"
              name="price"
              className="form-control"
              onChange={(e) => handleOptionChange(e)}
            />
          </div>
          {/* end */}

          {/* Size */}
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <div className="size-inputs">
              <input
                type="number"
                className="size-input"
                name="minSize"
                value={minSize}
                onChange={(e) => handleOptionChange(e)}
              />
              <input
                type="number"
                className="size-input"
                name="maxSize"
                value={maxSize}
                onChange={(e) => handleOptionChange(e)}
              />
            </div>
          </div>
          {/* end */}

          {/* Extras */}
          <div className="form-group">
            <div className="single-extra">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={(e) => handleOptionChange(e)}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>

            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={(e) => handleOptionChange(e)}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
          {/* end */}
        </form>
      </section>
    </>
  );
}

export default RoomFilter;
