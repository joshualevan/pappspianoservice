const PriceCard = ({ price }) => {
	return (
		<div className={`${price.className} card`}>
			<div>
				{price.icon}
				<h1>${price.price}</h1>
			</div>
			<h2>{price.header}</h2>
			<p>{price.description}</p>
		</div>
	);
};

export default PriceCard;
