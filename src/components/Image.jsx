import React from "react";
import img from "./gif.gif"
const Image = () => {
  return (
    <div className="container">
      <div>
        <p>These are images</p>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Image;
