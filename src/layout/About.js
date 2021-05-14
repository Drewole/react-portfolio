import ProgressiveImage from 'react-progressive-image';

const About = () => {
	const publicUrl = process.env.PUBLIC_URL;

	const skills = [
		'HTML5',
		'CSS',
		'SCSS',
		'Responsive Design',
		'PHP',
		'Javascript',
		'React',
		'Express',
		'MySQL',
		'MongoDB',
		'jQuery',
		'Wordpress',
		'Docker',
		'Git',
		'Webpack',
		'Sketch',
		'Figma',
		'Adobe Suite',
		'Agile Philosophy'
	];
	return (
		<section id="about" class="row about">
			<div class="container">
				<aside>
					<ProgressiveImage
						src={publicUrl + 'images/drewPic.jpg'}
						placeholder={publicUrl + 'images/friend-finder.png'}
					>
						{(src) => <img src={src} alt={'Illustration fo Drew Olsen'} />}
					</ProgressiveImage>

					<h3>Hi.👋 I'm Drew.🤓</h3>
					<p>
						Have a project? I'm <span>Available!</span>
					</p>
				</aside>
				<div>
					<h2>About Me</h2>
					<p>
						I am a Full-Stack Developer with around ten years of experience. I have an eye for design but
						also understand, can implement, and explain the technical side of Website Development. Some
						might consider me as a Designer that can Code.
					</p>
					<p>
						Ever since my start in web development I have strived to be on the cutting edge of new web
						technologies that could help my clients. I am always trying to increase the quality of work I
						can provide my clients, and ensure I am using the most appropriate technology for their project.
					</p>
					<h3>My Skills Include But Are Not Limited To:</h3>
					<ul>
						{skills.map((skill) => {
							return <li>{skill}</li>;
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;
