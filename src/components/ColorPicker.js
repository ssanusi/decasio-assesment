import React, { useState } from "react";
import { GithubPicker } from "react-color";

function ColorPicker({ changeBackground }) {
  const [Color, setColor] = useState("#fff");


  const handleChangeComplete = (color) => {
    setColor(color.hex);
    changeBackground(color.hex);
  };

  return <GithubPicker color={Color} onChange={handleChangeComplete} />;
}

export default ColorPicker;
