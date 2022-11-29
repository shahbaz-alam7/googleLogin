import React, { useState } from "react";

const FontSize = ({ finalFontSize, setFinalFontSize }) => {
  const [size, setSize] = useState(finalFontSize);
  const [display, setDisplay] = useState(false);
  const increament = () => {
    setDisplay(false);
    if (size < 36) {
      setSize(size + 2);
      setFinalFontSize(size + 2);
    } else if (size < 70) {
      setSize(size + 12);
      setFinalFontSize(size + 12);
    }
  };
  const decreament = () => {
    setDisplay(false);
    if (size > 36) {
      setSize(size - 12);
      setFinalFontSize(size - 12);
    } else if (size > 8) {
      setSize(size - 2);
      setFinalFontSize(size - 2);
    }
  };
  const fontSizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
  return (
    <div className="font-size" onMouseLeave={() => setDisplay(false)}>
      <button onClick={decreament} className="size-changer">
        -
      </button>
      {/* <input type="text" value={size} /> */}
      <div className="dropdown">
        <button onClick={() => setDisplay(!display)} className="dropbtn">
          {size}
        </button>
        {display && (
          <div
            className="dropdown-content"
            onMouseLeave={() => setDisplay(false)}
          >
            {fontSizes.map((item, i) => {
              return (
                <p
                  key={i}
                  onClick={() => {
                    setSize(item);
                    setDisplay(false);
                    setFinalFontSize(item);
                  }}
                >
                  {item}
                </p>
              );
            })}
          </div>
        )}
      </div>
      <button onClick={increament} className="size-changer">
        +
      </button>
    </div>
  );
};

export default FontSize;
