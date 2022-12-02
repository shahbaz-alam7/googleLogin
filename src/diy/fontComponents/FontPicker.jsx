import React, { Component, useState } from "react";
import FontPicker from "font-picker-react";
const ExampleComponent = ({ finalFont, setFinalFont }) => {
  return (
    <div>
      <FontPicker
        apiKey="AIzaSyDZyIxM4tyvQ9iwAxC9R7wZJilaORy5waw"
        activeFontFamily={finalFont}
        limit={250}
        onChange={(nextFont) => {
          setFinalFont(nextFont.family);
        }}
      />
    </div>
  );
};
export default ExampleComponent;
