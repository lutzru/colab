import React from "react";

import { useSelector } from "react-redux";

function BookingList() {
  const appState = useSelector(state => state);

  return (
    <div className="BookingList">
      Hier ist die BookingList: <h1>{appState.vehicle}</h1>{" "}
    </div>
  );
}

export default BookingList;
