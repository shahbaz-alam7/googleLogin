import React from "react";
import "./portrait.css";
import mainImg from "../img/mainImg.png";
import topImg from "../img/notice.png";
const Portrait = ({ Signal_Word, Text_2, Text_1, Text_3, color }) => {
  return (
    <div className="portrait">
      <div className="pictogram">
        <div className="pictogram-title-box" style={{ background: `${color}` }}>
          <img src={topImg} alt="img" />
          <p className="pic-title">{Signal_Word || "Notice"}</p>
        </div>
        <div className="pictogram-img-box">
          <img src={mainImg} alt="img" />
        </div>
        <div className="pictogram-desc-box">
          <h6 className="btm-title">
            {Text_1 || "Respiratory Protection Needed"}
          </h6>
          <p className="btm-desc">{Text_2 || "Toxic Gases  can cause burn"}</p>
        </div>
      </div>
      <div className="description">
        <p>
          Dimensions:
          <br />
          <span style={{ color: "#5F5F5F" }}>
            7 : 10 inches
            <br /> 10 : 14 inches
          </span>
        </p>
      </div>
    </div>
  );
};

export default Portrait;
