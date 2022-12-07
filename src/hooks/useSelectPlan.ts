import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { options } from '../constants/planOptions';

export const useSelectPlan = () => {
	const { paymentType } = useAppSelector((state) => state.subscription);
	const [isSelected, setIsSelected] = useState<number | null>(null);
	const dispatch = useAppDispatch();
	let activeStyle = 'bg-gray-50 border-MarineBlue';

	return {
		activeStyle,
		dispatch,
		isSelected,
		options,
		paymentType,
		setIsSelected,
	};
};
