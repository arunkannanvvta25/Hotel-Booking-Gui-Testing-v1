import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import RoomContext from "../context";
import { useContext } from "react";
import  { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function FeedbackContainer() {
  const { rooms, sortedRooms } = useContext(RoomContext);
  const [rating, setRating] = useState(0)
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)
  const submitFeedback =() => window.location.reload();
  return (
    <div>
      {/* <FeedbackFilter rooms={rooms} /> */}
      {/* <RoomList rooms={sortedRooms} /> */}
      <section className="filter-container">
        <form className="filter-forms">
          {/* roomtype */}
          <div className="single-extras">
            <label htmlFor="type">Room Type:</label>
            <input type="text"></input>
          </div>
          {/* end */}

          

          <div className="single-extras"> 
        <label>Rating:</label>
          <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        /* Available Props */
      />
      </div>

            <div className="single-extras">
              <input
                type="radio"
                name="recommend"
                id="recommend"
              />
              <label htmlFor="recommend">Will recommend to a friend</label>
            {/* </div>

            <div className="single-extras"> */}
              <input
                type="radio"
                name="notRecommend"
                id="notRecommend"
              />
              <label htmlFor="notRecommend">Will not recommend to a friend</label>
            </div>
          <div className="single-extras">
          <label>
      Write your post:
      <textarea name="postContent" rows={4} cols={40} />
    </label>
    </div>
        </form>
      </section>
      <button type="submit" className="feedbackSubmit" id="feedbackSubmit" onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}

export default FeedbackContainer;
