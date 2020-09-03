import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import ColorPicker from "./ColorPicker";
import TextEditToolbar from "./TextEditToolbar";
import ImageToolbar from "./ImageToolbar";

function Canvas() {
  const [canvas, setCanvas] = useState(null);
  const canvasElm = useRef(null);

  const handleSubmit = (color) => {
    canvas.setBackgroundColor(color, () => canvas.renderAll());
  };

  const addText = () => {
    const textbox = new fabric.IText("ADD TEXT", {
      left: 20,
      top: 50,
    });
    canvas.add(textbox).setActiveObject(textbox);
  };

  const addImage = (url) => {
    fabric.Image.fromURL(url, (img) => {
      canvas.add(img);
      canvas.renderAll();
    });
  };
  const setFontFamily = (font) => {
    canvas.getActiveObject().set("fontFamily", font);
    canvas.renderAll();
  };
  const saveCanvas = () => {
    const canvasObject = canvas.toJSON();
    localStorage.setItem("canvas", JSON.stringify(canvasObject));
  };

  const handleImage = (e) => {

    const reader = new FileReader();
    reader.onload = function (event) {
      var img = new Image();
      img.onload = function () {
        const imgInstance = new fabric.Image(img, {
          selectable: 1,
        });
        imgInstance.scaleToHeight(300);
        imgInstance.scaleToWidth(300);
        canvas.add(imgInstance);
        canvas.renderAll();
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const resetCnavas = () => {
    localStorage.removeItem('canvas')
    canvas.clear();
  }

  useEffect(() => {
    const saveCanvas = localStorage.getItem("canvas");
    const canvas = new fabric.Canvas(canvasElm.current);
    if (saveCanvas) {
      canvas.loadFromJSON(saveCanvas, () => canvas.renderAll());
    }
    setCanvas(canvas);
  }, []);
  return (
    <>
      <canvas ref={canvasElm} width="600px" height="600px" />
      <label>
        Canvas Background
        <ColorPicker changeBackground={handleSubmit} />
      </label>
      <TextEditToolbar setFontFamily={setFontFamily} addText={addText} />
      <ImageToolbar addImage={addImage} handleImage={handleImage} />
      <button onClick={saveCanvas}>save</button>
      <button onClick={resetCnavas} >reset canvas</button>
      <button>download</button>
    </>
  );
}

export default Canvas;
