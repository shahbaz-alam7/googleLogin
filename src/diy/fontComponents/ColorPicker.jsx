import React, { useState } from "react";
import { CompactPicker, CirclePicker } from "react-color";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const allColors = [
  "#FF0000",
  "#003459",
  "#4D4D4D",
  "#999999",
  "#FFFFFF",
  "#F44E3B",
  "#FE9200",
  "#FCDC00",
  "#DBDF00",
  "#A4DD00",
  "#68CCCA",
  "#73D8FF",
  "#AEA1FF",
  "#FDA1FF",
  "#333333",
  "#808080",
  "#cccccc",
  "#D33115",
  "#E27300",
  "#FCC400",
  "#B0BC00",
  "#68BC00",
  "#16A5A5",
  "#009CE0",
  "#7B64FF",
  "#FA28FF",
  "#000000",
  "#666666",
  "#B3B3B3",
  "#9F0500",
  "#C45100",
  "#FB9E00",
  "#808900",
  "#194D33",
  "#0C797D",
  "#0062B1",
  "#653294",
  "#AB149E",
];

const ColorPicker = ({ setFinalColor }) => {
  const [colors, setColors] = useState("#00E0FF");

  const [showPicker, setShowPicker] = useState(false);

  const onClick = () => {
    setShowPicker(!showPicker);
  };

  const onClose = () => {
    setShowPicker(false);
  };

  const onChange = (color) => {
    setColors(color.hex);
    setFinalColor(color.hex);
  };
  return (
    <div className="color-picker-box">
      {showPicker && <div className="arrow-up"></div>}
      <div className="color" onClick={onClick}>
        <div style={{ background: `${colors}` }} className="circle" />
        {showPicker ? (
          <IoIosArrowUp size={30} color={"#003459"} />
        ) : (
          <IoIosArrowDown size={30} color={"#003459"} />
        )}
      </div>
      {showPicker ? (
        <div className="popover">
          <div className="cover" onClick={onClose} />
          <CirclePicker color={colors} colors={allColors} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
