import React, { useState } from 'react'


function ImageToolbar({ addImage, handleImage }) {
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addImage(imageUrl);
  };

  const handleImageChange = (e) => {
    handleImage(e)
  };

  return (
    <div>
      <button onClick={handleSubmit}>click to add image</button>
      <label>
        image url
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          onChange={handleChange}
        />
      </label>
      <input
        type="file"
        id="imageLoader"
        name="imageLoader"
        onChange={handleImageChange}
      />
    </div>
  );
}

export default ImageToolbar
