import ProgressiveImage from 'react-progressive-image';
// import ProjectDetails from './Details';

const Project = () => {
	const publicUrl = process.env.PUBLIC_URL;
	return (
		<div class="card">
			<a href="https://drewole.github.io/adopt-pet-app/">
				<ProgressiveImage
					src={publicUrl + 'images/friend-finder.png'}
					placeholder={publicUrl + 'images/friend-finder.png'}
				>
					{(src) => <img src={src} alt={'Screenshot of find your friend, Friend Finder App'} />}
				</ProgressiveImage>
			</a>
		</div>
	);
};

export default Project;
