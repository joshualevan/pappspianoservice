import React from 'react';
import Bio from './Bio';
import Testimonials from './Testimonials';

const About = () => {
	return (
		<section className='about' id='bio'>
			<main>
				<Testimonials />
				<Bio />
			</main>
		</section>
	);
};

export default About;
