import React from "react";
import { useParams } from "react-router-dom";

const Number = () => {
  const { id, color1, color2 } = useParams();

  return (
    <>
      <div style={{ backgroundColor: color1 }}>
        {id == undefined ? (
          <p>Please enter a number or word</p>
        ) : isNaN(id) ? (
          <p style={{ color: color2 }}>The word is: {id}</p>
        ) : (
          <>The number is# {id}</>
        )}
      </div>
    </>
  );
};

export default Number;
