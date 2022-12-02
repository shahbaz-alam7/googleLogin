import React from "react";
import "./styles.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import poster from "./img/poster.png";
import utility from "./img/utility-stricker.png";
import floor_graphics from "./img/floor_graphics.png";
import signages from "./img/signages.png";
import Portrait from "./helper/Portrait";
import Landscape from "./helper/Landscape";
const Home = ({ setName }) => {
  return (
    <div className="div-home-container">
      
      <div className="diy-home-mid">
        <p className="heading">Categories We Offer</p>
        <div className="categories">
          <div className="category" onClick={() => setName("Posters")}>
            <img src={poster} alt="" />
            <p className="caption">Posters</p>
          </div>
          <div className="category" onClick={() => setName("Floor Graphics")}>
            <img src={floor_graphics} alt="" />
            <p className="caption">Floor Graphics</p>
          </div>
          <div className="category" onClick={() => setName("Signages")}>
            <img src={signages} alt="" />
            <p className="caption">Signages</p>
          </div>
          <div className="category" onClick={() => setName("Utility Stickers")}>
            <img src={utility} alt="" />
            <p className="caption">Utility Stickers</p>
          </div>
        </div>
      </div>
      <div className="diy-home-btm">
        <p className="heading">All Categories</p>
        <div className="div">
          <Portrait title="Notice" color="#00E0FF" />
          <Portrait title="Danger" color="#FF0000" />
          <Portrait title="Caution" color="#FFE500" />
          <Portrait title="Caution" color="#FFE500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
