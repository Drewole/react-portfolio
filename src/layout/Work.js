import { useEffect, useState } from 'react';
import Project from '../components/Project';
// import Details from '../components/Details';
import data from './../data/data.json';
const Work = () => {
	return (
		<section id="portfolio" className="row portfolio">
			<h2>Some of My Work.</h2>
			<div className="folio-items">
				<div className="details">{/* <Details /> */}</div>
				{/* {projectDetails.map((project, i) => {
					return <p key={i}>{project}</p>;
				})} */}
				{data.map((item, i) => {
					console.log(item);
					return <Project key={i} data={item} />;
				})}

				{/* <Project /> */}
			</div>
		</section>
	);
};
export default Work;
