import { planOptions } from '../constants/planOptions';
import { SelectPlanValues, SetSelectedOption } from '../interfaces';
import { setPaymentType, setSubscriptionPlan, useAppDispatch } from '../store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export const useSelectPlan = () => {
	const [selected, setSelected] = useState<number | null>(null);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const initialValues = {
		selectedOption: null,
		toggler: false,
	};

	const nextStep = (values: SelectPlanValues) => {
		dispatch(setSubscriptionPlan(values.selectedOption!));
		dispatch(setPaymentType(values.toggler ? 'yearly' : 'monthly'));
		navigate('/addons');
	};
	const setSelectedOption: SetSelectedOption = (props) => {
		setSelected(props.index);
		if (props.values.selectedOption !== props.option.plan) {
			props.setFieldValue('selectedOption', {
				...props.option,
				price: props.values.toggler ? props.option.price.yearly : props.option.price.monthly,
			});
		}
	};
	let activeClass = 'bg-Magnolia border-MarineBlue';
	return {
		activeClass,
		initialValues,
		nextStep,
		planOptions,
		selected,
		setSelected,
		setSelectedOption,
	};
};
