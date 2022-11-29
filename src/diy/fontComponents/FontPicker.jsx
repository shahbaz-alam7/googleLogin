import React, { Component, useState } from "react";
import FontPicker from "font-picker-react";
const ExampleComponent = ({ finalFont, setFinalFont }) => {
  const [font, setFont] = useState(finalFont);

  return (
    <div>
      <FontPicker
        apiKey="AIzaSyDZyIxM4tyvQ9iwAxC9R7wZJilaORy5waw"
        activeFontFamily={font}
        limit={250}
        onChange={(nextFont) => {
          setFont(nextFont.family);
          setFinalFont(nextFont.family);
        }}
      />
    </div>
  );
};
export default ExampleComponent;
