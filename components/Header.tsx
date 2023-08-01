import React from 'react';
import bg from 'images/piano-tuner.jpg';

const Header = () => {
	return (
		<header id='header'>
			<main>
				{/* Use responsive img sizing */}
				<div className='header-container'>
					<div className='header-text'>
						<h1>
							PAPP{"'"}S PIANO
							<br />
							SERVICE--
						</h1>
						<p>
							<strong>Josh Papp</strong>, owner and sole operator of{' '}
							<strong>Papp{"'"}s Piano Service</strong>, offers piano tuning for pianos of{' '}
							<strong>all makes and models</strong>. In addition to tuning, He also offers
							exceptional action regulation services, and repairs of most common piano problems.
							Based in <strong>University Heights</strong>, Josh services much of{' '}
							<strong>Northeast Ohio</strong>/ <strong>Cleveland</strong> and <strong>Akron</strong>{' '}
							areas including— <strong>Cuyahoga County</strong>,{' '}
							<strong>Northern Summit County</strong>, <strong>eastern Lorain County</strong>,{' '}
							<strong>western Lake County</strong>, and <strong>western Geauga County</strong>.
						</p>
					</div>
					<div className='header-img-container' style={{ backgroundImage: `url(${bg.src})` }}></div>
				</div>
				<a href='#pricing'>
					<button>Tune My Piano</button>
				</a>
			</main>
		</header>
	);
};

export default Header;
