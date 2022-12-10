import { setAddon, useAppDispatch, useAppSelector } from '../store';
import { HandleChangeAddons, Addon } from '../interfaces';
import { headersData, addonsOptions } from '../constants';
import { useNavigate } from 'react-router-dom';

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
