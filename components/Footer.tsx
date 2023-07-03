import { Facebook } from './ui/icons/Facebook';
import { Thumbtack } from './ui/icons/Thumbtack';
import { Nextdoor } from './ui/icons/Nextdoor';
import { LinkedIn } from './ui/icons/LinkedIn';

const Footer = () => {
	const size = 48;
	return (
		<footer>
			<main>
				<div>
					<a
						href='https://www.facebook.com/p/Papps-Piano-Service-100063836780703/'
						target='_blank'
						className='facebook'>
						<Facebook size={size} />
					</a>
					<a
						href='https://www.thumbtack.com/oh/cleveland/piano-tuners/papps-piano-service/service/159059521068065855'
						target='_blank'
						className='thumbtack'>
						<Thumbtack size={size} />
					</a>
					<a
						href='https://nextdoor.com/pages/papps-piano-service-cleveland-heights-oh/'
						target='_blank'
						className='nextdoor'>
						<Nextdoor size={size} />
					</a>
					<a
						href='https://www.linkedin.com/in/josh-papp-a62a8214/'
						target='_blank'
						className='linkedin'>
						<LinkedIn size={size} />
					</a>
				</div>
				<p>
					&copy;{new Date().getFullYear()} Papp{"'"}s Piano Service
				</p>
			</main>
		</footer>
	);
};

export default Footer;
