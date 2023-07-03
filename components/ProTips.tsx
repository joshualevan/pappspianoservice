const ProTips = () => {
	const tips = [
		'All pianos require annual tunings regardless of how often the intstrument is played',
		'Most pianos benefit from bi-annual service due to swings in temperature and humidity',
		"Pianos that are exceptionally out of tune or haven't seen service in years may require “Pitch Raise” tuning for best performance",
	];

	const index = 0;

	return (
		<section className='pro-tips'>
			<main>
				<aside>
					<em>Pro Tip--</em> {tips[index]}
				</aside>
			</main>
		</section>
	);
};

export default ProTips;
