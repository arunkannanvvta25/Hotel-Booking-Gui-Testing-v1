import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoomProvider } from "./context";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import NotFound from "./pages/NotFound";
import SingleRoom from "./pages/SingleRoom";
import Feedback from "./pages/Feedback";
import BookedFeedback from "./pages/BookedFeedback";
function App() {
  return (
    <RoomProvider>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms" element={<Rooms />} />
        <Route exact path="/rooms/:slug" element={<SingleRoom />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/booked" element={<BookedFeedback />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RoomProvider>
  );
}

export default App;
