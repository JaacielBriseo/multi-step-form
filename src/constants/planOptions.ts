import { Advanced, Arcade, Pro } from '../assets';
import { PlanOptionValues } from '../interfaces';

export const planOptions: PlanOptionValues[] = [
	{
		plan: 'Arcade',
		price: {
			monthly: 9,
			yearly: 90,
		},
		icon: Arcade,
	},
	{
		plan: 'Advanced',
		price: {
			monthly: 12,
			yearly: 120,
		},
		icon: Advanced,
	},
	{
		plan: 'Pro',
		price: {
			monthly: 15,
			yearly: 150,
		},
		icon: Pro,
	},
];
