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

				{data.map((item, i) => {
					console.log(item);
					return <Project key={i} data={item} />;
				})}
			</div>
		</section>
	);
};
export default Work;
