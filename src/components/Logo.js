import React from 'react';
import Svg from './../images/logo.svg';

const Logo = () => {
	return (
		<a href="#top" className="logo">
			<img src={Svg} alt="Drew Olsen Logo" />
			Drew Olsen
		</a>
	);
};

export default Logo;
