import React from 'react';
import ImageLoader from '../components/ImgLoader';
// import ProjectDetails from './Details';

const Project = () => {
	const publicUrl = process.env.PUBLIC_URL;
	return (
		<div class="card">
			<a href="https://drewole.github.io/adopt-pet-app/">
				<ImageLoader
					source={publicUrl + 'images/friend-finder.png'}
					alt="Screenshot of find your friend, Friend Finder App"
				/>
			</a>
		</div>
	);
};

export default Project;
