import React from "react";
import "./styles.css";
import CircleIcon from "@mui/icons-material/Circle";
import SquareIcon from "@mui/icons-material/Square";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import PentagonIcon from "@mui/icons-material/Pentagon";
import HexagonIcon from "@mui/icons-material/Hexagon";
import GradeIcon from "@mui/icons-material/Grade";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AllOutIcon from "@mui/icons-material/AllOut";
import StarsSharpIcon from "@mui/icons-material/StarsSharp";

const Frames = () => {
  const frames = [
    <CircleIcon />,
    <SquareIcon />,
    <PentagonIcon />,
    <GradeIcon />,
    <HexagonIcon />,
    <FavoriteIcon />,
    <ArrowRightAltIcon />,
    <AllOutIcon />,
    <StarsSharpIcon />,
    <ChangeHistoryIcon />,
  ];
  const [myframe, setFrame] = React.useState(0);
  return (
    <div className="frame-container">
      <div className="frames">
        {frames.map((item, i) => {
          return <div onClick={() => setFrame(i)}>{frames[i]}</div>;
        })}
      </div>
      <div className="frame-viewer">
        {frames[myframe]}
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Frames;
