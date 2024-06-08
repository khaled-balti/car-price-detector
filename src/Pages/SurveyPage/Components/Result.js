import React from "react";
import { useOutletContext } from "react-router-dom";
const Result = () => {
    const [cars, price, setPrice] = useOutletContext();
  return (
    <div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          borderRadius: "10px",
          background: "white",
          width: "600px",
          height: "400px",
          marginTop: "150px",
          padding: "30px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <p className="fs-4 fw-bold "> Predicted Price:</p>
        <p>{price} TND</p>
      </div>
    </div>
  );
};

export default Result;
