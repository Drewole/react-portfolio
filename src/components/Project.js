import ProgressiveImage from 'react-progressive-image';
// import ProjectDetails from './Details';

const Project = (props) => {
	const publicUrl = process.env.PUBLIC_URL;
	console.log(props, 'Props');
	return (
		<div className="card">
			<a href="https://drewole.github.io/adopt-pet-app/">
				<ProgressiveImage
					src={publicUrl + '/images/examples/' + props.data.image.square}
					placeholder={publicUrl + '/images/examples/' + props.data.image.square}
				>
					{(src) => <img src={src} alt={props.data.name} />}
				</ProgressiveImage>
			</a>
		</div>
	);
};

export default Project;
