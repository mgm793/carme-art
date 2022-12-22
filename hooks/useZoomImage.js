import { useState } from "react";

export function useZoomImage() {
  const [selectedImage, setSelectedImage] = useState();
  const close = () => {
    setSelectedImage("");
  }
  const zoom = (image) => {
    console.log(image)
    setSelectedImage(image);
  }
  return {close, zoom, selectedImage};
}