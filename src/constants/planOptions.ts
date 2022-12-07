import { Advanced, Arcade, Pro } from '../assets';

interface PlanOption {
	plan: string;
	monthly: string;
	yearly: string;
	icon: string;
}
export const options: PlanOption[] = [
    {
        plan: 'Arcade',
        monthly: '9/mo',
        yearly: '90/yr',
        icon: Arcade,
    },
    {
        plan: 'Advanced',
        monthly: '12/mo',
        yearly: '120/yr',
        icon: Advanced,
    },
    {
        plan: 'Pro',
        monthly: '15/mo',
        yearly: '150/yr',
        icon: Pro,
    },
];