import React from 'react';
import { Project, Details } from '../components/';
export const Work = () => {
	return (
		<section id="portfolio" class="row portfolio">
			<h2>Some of My Work.</h2>
			<div class="folio-items">
				<div className="details">
					<Details />
				</div>
				{/* will need to map over data and pass it down to the project 
					On click we will populate the details section with content from that selected element
				*/}
				<Project />
			</div>
		</section>
	);
};
