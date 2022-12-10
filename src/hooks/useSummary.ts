import { useAppSelector } from '../store';
import { headersData } from '../constants';

export const useSummary = () => {
	const { paymentType, addons, subscriptionPlan } = useAppSelector((state) => state.subscription);
	const { plan, price } = subscriptionPlan;

	const totalAddonsPrices = addons.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.price;
	}, 0);

	return {
		addons,
		headersData,
		paymentType,
		plan,
		price,
		totalAddonsPrices,
	};
};
