import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { planOptions } from '../constants/planOptions';

export const useSelectPlan = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [selected, setSelected] = useState<number | null>(null);
	const initialValues = {
		selectedOption: null,
		toggler: false,
	};
	let activeClass = 'bg-Magnolia border-MarineBlue';
	return {
		dispatch,
		navigate,
		selected,
		setSelected,
		activeClass,
		initialValues,
        planOptions
	};
};
