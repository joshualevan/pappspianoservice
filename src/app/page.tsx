import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Nav from '../../components/Nav';
import ProTips from '../../components/ProTips';
import About from '../../components/about/About';
import Booking from '../../components/commerce/Booking';

export default function Home() {
	return (
		<>
			<Nav />
			<Header />
			<ProTips />
			<About />
			<Booking />
			<Footer />
		</>
	);
}
