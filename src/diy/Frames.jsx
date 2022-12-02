import React from "react";
import "./styles.css";
const Frames = () => {
  const clips = [
    "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    "polygon(50% 0%, 0% 100%, 100% 100%)",
    "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    "polygon(25% 0%, 75% 0%, 100% 48%, 75% 100%, 25% 100%, 0% 50%)",
    "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    "circle(50% at 50% 50%)",
    "ellipse(25% 50% at 50% 50%)",
    " polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
    "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
    "polygon(50% 0, 61% 35%, 100% 35%, 68% 57%, 83% 100%, 50% 70%, 17% 100%, 32% 57%, 0 36%, 39% 35%)",
  ];
  const [frameIndex, setFrameIndex] = React.useState(0);
  return (
    <div className="frame-container">
      <div className="frames">
        {clips.map((item, i) => {
          return (
            <div
              className="frame-item"
              style={{ clipPath: item }}
              onClick={() => setFrameIndex(i)}
            />
          );
        })}
      </div>
      <div className="frame-viewer">
        <div id="frame-div">
          <div
            id="frame"
            style={{
              clipPath: clips[frameIndex],
            }}
          ></div>
        </div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Frames;
