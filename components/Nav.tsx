// 'use client';

// import { useState, useEffect } from 'react';

const Nav = () => {
	// const [y, setY] = useState(window.scrollY);

	// const onScroll = () => {
	// 	setY(window.scrollY);
	// };

	// window.addEventListener('scroll', onScroll);

	return (
		<nav className='default'>
			<main>
				<img src='mark.png' alt='Papps Piano Service Logo' />
				<ul>
					<li className='home-link'>
						<a href='#header'>home</a>
					</li>
					<li>
						<a href='#bio'>about</a>
					</li>
					<li>
						<a href='#pricing'>pricing -- services</a>
					</li>
					<li>
						<a href='#contact'>booking -- contact</a>
					</li>
				</ul>
			</main>
		</nav>
	);
};

export default Nav;
