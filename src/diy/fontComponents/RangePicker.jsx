import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const RangePicker = ({ setRange, range }) => {
  const [value, setValue] = React.useState(range);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    setRange(newValue);
  };
  return (
    <div className="range">
      <Box>
        <Slider
          min={0}
          max={200}
          color="secondary"
          onChange={handleSliderChange}
          sx={{
            width: 500,
            color: "#003459",
            "& .MuiSlider-thumb": {
              color: "#fff",
              border: "1px solid #003459",
            },
          }}
          defaultValue={value}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
};
export default RangePicker;
