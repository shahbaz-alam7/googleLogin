import React, { useState } from "react";
import { CompactPicker, CirclePicker } from "react-color";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
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
    <div>
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
          <CirclePicker color={colors} onChange={onChange} />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPicker;
