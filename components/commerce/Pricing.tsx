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
					CALL <a href='tel:615-925-0495'>(615)925-0495</a> or email Josh at{' '}
					<span>pappspianoservice@yahoo.com</span> for booking, questions, or additional service
					requests.
				</p>
			</div>
		</>
	);
};

export default Pricing;
