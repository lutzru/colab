import React from "react";

import { useDispatch } from "react-redux";

function DoButton1() {
  const dispatch = useDispatch();

  return (
    <div className="BookingList">
      DoButton1
      <button
        onClick={() =>
          dispatch({
            type: "Car"
          })
        }
      >
        Car
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "Bike"
          })
        }
      >
        Bike
      </button>
    </div>
  );
}

export default DoButton1;
