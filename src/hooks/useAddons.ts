import { addonsOptions } from '../constants/addonsOptions';
import { Addon } from '../interfaces';
import { setAddon, useAppDispatch, useAppSelector } from '../store';
import { HandleChangeAddons } from '../interfaces/interfaces';
import { useNavigate } from 'react-router-dom';
import { headersData } from '../constants/headersData';

export const useAddons = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { paymentType } = useAppSelector((state) => state.subscription);

	const handleSubmit = (values: { addons: never[] }) => {
		dispatch(setAddon(values.addons));
		navigate('/summary');
	};

	const handleChange: HandleChangeAddons = (values, option, setFieldValue) => {
		if (values.addons.find((add: Addon) => add.addon === option.addon) !== undefined) {
			setFieldValue(
				'addons',
				values.addons.filter((add: Addon) => add.addon !== option.addon)
			);
		} else {
			setFieldValue('addons', [
				...values.addons,
				{
					addon: option.addon,
					price: paymentType === 'monthly' ? option.price.monthly : option.price.yearly,
				},
			]);
		}
	};
	return {
		addonsOptions,
		handleChange,
		handleSubmit,
		headersData,
		paymentType,
	};
};
