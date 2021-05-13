import React, { useState } from 'react';
import './ImgLoader.css';

// Thanks to the fine gentleman Melvin George for the following component. Customized to my needs.
// https://dev.to/melvin2016/progressive-image-loading-in-reactjs-3ik6

// Props: source, alt
const ImageLoader = ({ source, alt }) => {
	// state of images
	const [
		imageLoaded,
		setImageLoaded
	] = useState(false);

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
					opacity : imageLoaded ? '1' : '0'
				}}
				onLoad={() => setImageLoaded(true)}
			/>

			<img
				style={{
					opacity : imageLoaded ? '0' : '1'
				}}
				src={trace}
				alt={alt}
			/>
		</div>
	);
};

export default ImageLoader;
