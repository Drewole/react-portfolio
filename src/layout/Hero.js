import React from 'react';

const Hero = () => {
	const publicUrl = process.env.PUBLIC_URL;
	return (
		<div style={{ backgroundImage: `url(${publicUrl}/images/forestClose.jpg)` }} className="hero row">
			<div className="intro-container">
				<h1>Full-Stack Developer</h1>
				<p>
					I am a designer that is also a full-stack developer. I can take your project from design to deploy.
				</p>
				<a href="#portfolio">
					<button>View My Portfolio</button>
				</a>
			</div>
		</div>
	);
};

export default Hero;
