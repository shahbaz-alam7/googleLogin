import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Portrait from "./helper/Portrait";
import Landscape from "./helper/Landscape";
import { data } from "./helper/posters.js";
const Items = ({ itemName, setName }) => {
  const signalWords = data[0].signals;
  return (
    <>
      <div className="items-box ">
        <p className="heading">
          <ArrowBackIcon onClick={() => setName("")} />
          {/* {itemName} */}
        </p>
        <p className="heading">Portrait</p>
        <div className="portrait-landscape-box ">
          {signalWords.map((item, index) => {
            return <Portrait {...item} key={index} />;
          })}
        </div>
      </div>
      <div className="items-box ">
        <p className="heading">Landscape</p>
        <div className="portrait-landscape-box ">
          {signalWords.map((item, index) => {
            return <Landscape {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Items;
