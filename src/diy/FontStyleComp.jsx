import React, { useState } from "react";
import ColorPicker from "./fontComponents/ColorPicker";
import ExampleComponent from "./fontComponents/FontPicker";
import "./fontComponents/font.css";
import RangePicker from "./fontComponents/RangePicker";
import FontSize from "./fontComponents/FontSize";

const FontStyleComp = () => {
  const [finalColor, setFinalColor] = useState("#000");
  const [finalFont, setFinalFont] = useState("Open Sans");
  const [finalFontSize, setFinalFontSize] = useState(12);
  const [range, setRange] = useState(75);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1400px",
          border: "2px solid",
        }}
      >
        <FontSize
          finalFontSize={finalFontSize}
          setFinalFontSize={setFinalFontSize}
        />
        <ColorPicker setFinalColor={setFinalColor} />
        <ExampleComponent finalFont={finalFont} setFinalFont={setFinalFont} />
        <RangePicker range={range} setRange={setRange} />
      </div>
      <div style={{ height: "100px" }}>
        <div style={{ color: `${finalColor}`, fontFamily: `${finalFont}` }}>
          <h3>Range: {range}</h3>
          <h3>Color: {finalColor}</h3>
          <h3>Font-family: {finalFont}</h3>
          <h3>Font-Size: {finalFontSize}</h3>
        </div>
      </div>
    </div>
  );
};

export default FontStyleComp;
