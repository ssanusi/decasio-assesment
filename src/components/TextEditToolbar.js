import React, { useState } from "react";

const fonts = [
  "Arial Black",
  "Helvetica",
  "Verdana",
  "Trebuchet MS",
  "Tahoma",
  "MS Sans Serif",
  "Symbol",
  "Times New Roman",
  "MS Serif",
  "New York",
  "Palatino Linotype",
  "Book Antiqua",
  "Georgia",
  "Courier New",
  "Lucida Console",
  "Impact",
];

function TextEditToolbar({ setFontFamily, addText }) {
  const [font, setfont] = useState("Arial");

  const handleChange = (e) => {
    setfont(e.target.value);
    setFontFamily(font);
  };


  return (
    <div>
      <button onClick={addText}>click to add text</button>
      <label>
        font
        <select value={font} onChange={handleChange}>
          {fonts.map((font) => (
            <option value={font} key={font}>
              {font}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default TextEditToolbar;
