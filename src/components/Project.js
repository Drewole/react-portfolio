import React, { useState } from "react";

// Props: source, alt
const ImageLoader = ({ source, alt }) => {
  // state of images
  const [imageLoaded, setImageLoaded] = useState(false);

  // src image and trace image url
  const { src, trace } = require(`./${source}`);

  // render code
  return (
    <div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          opacity: imageLoaded ? "1" : "0",
        }}
        onLoad={() => setImageLoaded(true)}
      />

      <img
        style={{
          opacity: imageLoaded ? "0" : "1",
        }}
        src={trace}
        alt={alt}
      />
    </div>
  );
};

export default ImageLoader;