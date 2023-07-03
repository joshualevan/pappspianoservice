import { Piano } from '../ui/icons/Piano';
import { Speed } from '../ui/icons/Speed';

let size = '100';
if (globalThis.window?.innerWidth < 1600) {
	size = '3';
}

const piano = <Piano size={size} />;
const speed = <Speed size={size} />;

export const pricingData = [
	{
		id: '1',
		header: 'Standard Tuning',
		className: 'standard-tuning',
		icon: piano,
		price: 140,
		description: 'For pianos that receive regularly scheduled tunings',
	},
	{
		id: '2',
		header: 'Pitch Raise',
		className: 'pitch-raise',
		icon: speed,
		price: 200,
		description:
			'For pianos that have not received regular tunings or have been exposed to extreme swings in humidity',
	},
];
