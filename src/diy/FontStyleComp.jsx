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
    <div className="box">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "800px",
          margin: "auto",
        }}
      >
        <FontSize
          finalFontSize={finalFontSize}
          setFinalFontSize={setFinalFontSize}
        />
        <ColorPicker finalColor={finalColor} setFinalColor={setFinalColor} />
        <ExampleComponent finalFont={finalFont} setFinalFont={setFinalFont} />
      </div>
      <div style={{ height: "100px" }}>
        <div
          style={{
            color: `${finalColor}`,
            fontFamily: `${finalFont}`,
            fontSize: `${finalFontSize}px`,
          }}
        >
          <h3>Range: {range}</h3>
          <h3>Color: {finalColor}</h3>
          <h3>Font-family: {finalFont}</h3>
          <h3>Font-Size: {finalFontSize}</h3>
        </div>
      </div>
      <RangePicker range={range} setRange={setRange} />
    </div>
  );
};

export default FontStyleComp;
