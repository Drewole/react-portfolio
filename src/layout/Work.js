import { useEffect } from 'react';
// import Project from '../components/Project';
import data from '../data/data';
// import Details from '../components/Details';

const Work = () => {
	useEffect(() => {
		const newData = JSON.stringify(data);
		console.log(newData);
		return () => {
			//cleanup
		};
	}, []);

	return (
		<section id="portfolio" className="row portfolio">
			<h2>Some of My Work.</h2>
			<div className="folio-items">
				<div className="details">{/* <Details /> */}</div>
				{/* {data.map((project, i) => {
					return <p key={project}>{project}</p>;
				})} */}
				{/* {Object.keys(data).map((keyName, i) => (
					<p key={i}>
						key: {i} Name: {data[keyName]}
					</p>
				))} */}
				{/* <Project /> */}
			</div>
		</section>
	);
};
export default Work;
