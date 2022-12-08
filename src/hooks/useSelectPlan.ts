import { SetStateAction, useState } from 'react';
import { setSubscriptionPlan, useAppDispatch } from '../store';

export interface Option {
	plan: string;
	price: {
		monthly: number;
		yearly: number;
	};
	icon: string;
}
export const useSelectPlan = () => {
	const dispatch = useAppDispatch();
	const [enabled, setEnabled] = useState(false);
	const [isSelected, setIsSelected] = useState<SetStateAction<null | number>>(null);
	let activeStyle = 'border-PurplishBlue bg-Magnolia';
	const handleClick = (index: number, option: Option) => {
		setIsSelected(index);
		dispatch(
			setSubscriptionPlan({
				plan: option.plan,
				price: !enabled ? option.price.monthly : option.price.yearly,
			})
		);
	};

	return {
		handleClick,
		isSelected,
		activeStyle,
		setEnabled,
		enabled,
        setIsSelected
	};
};
