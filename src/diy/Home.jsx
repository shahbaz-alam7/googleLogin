import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import poster from "./img/poster.png";
import floor_graphics from "./img/floor_graphics.png";
import signages from "./img/signages.png";
const Home = () => {
  return (
    <div className="div-home-container">
      <div className="diy-home-top">
        <div className="content">
          <div className="inputBox">
            <SearchIcon id="icon-diy" />
            <input type="text" placeholder="Search for a category" />
          </div>
          <div className="diy-btn">
            <AddIcon fontSize="large" id="create-btn" />
            <span>Create New</span>
          </div>
        </div>
      </div>
      <div className="diy-home-mid">
        <p className="heading">Categories We Offer</p>
        <div className="categories">
          <div className="category">
            <img src={poster} alt="" />
            <p className="caption">Posters</p>
          </div>
          <div className="category">
            <img src={floor_graphics} alt="" />
            <p className="caption">Floor Graphics</p>
          </div>
          <div className="category">
            <img src={signages} alt="" />
            <p className="caption">Signages</p>
          </div>
        </div>
      </div>
      <div className="diy-home-btm">
        <p className="heading">All Categories</p>
        <div className="div">
          {/* <Portrait title="Notice" color="#00E0FF" />
          <Portrait title="Danger" color="#FF0000" />
          <Portrait title="Caution" color="#FFE500" />
          <Portrait title="Notice" color="#00E0FF" />
          <Portrait title="Caution" color="#FFE500" />
          <Portrait title="Warning" color="#FFA800" />
          <Landscape title="Notice" color="#00E0FF" />
          <Landscape title="Caution" color="#FFE500" />
          <Landscape title="Danger" color="#FF0000" />
          <Landscape title="Warning" color="#FFA800" />
          <Landscape title="Warning" color="#FFA800" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
