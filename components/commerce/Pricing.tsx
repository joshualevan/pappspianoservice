import { pricingData } from './pricingData';
import PriceCard from './PriceCard';

const Pricing = () => {
	return (
		<>
			<article id='pricing'>
				{pricingData.map((price) => (
					<PriceCard price={price} key={price.id} />
				))}
			</article>
			<div id='contact'>
				<p>
					CALL <a href='tel:615-925-0495'>(615)925-0495</a> for booking, questions, or additional
					service requests or please use the form below.
				</p>
			</div>
		</>
	);
};

export default Pricing;
