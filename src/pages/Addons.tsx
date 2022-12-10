import { Field, Form, Formik } from 'formik';
import { setAddon } from '../store';
import { useAppDispatch } from '../store/hookTypes';
import { useNavigate } from 'react-router-dom';
import { useAddons } from '../hooks/useAddons';
import { Addon } from '../interfaces';
import { Header, SubmitButton } from '../components';

export const Addons = () => {
	const { addonsOptions, paymentType } = useAddons();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	let activeClass = 'border-MarineBlue bg-Magnolia';
	return (
		<Formik
			initialValues={{
				addons: [],
			}}
			onSubmit={(values) => {
				dispatch(setAddon(values.addons));
				navigate('/summary');
			}}
		>
			{({ values, setFieldValue }) => (
				<Form className='formLayout'>
					<Header text='Add-ons help enhance your gaming experience.' title='Pick add-ons' />
					<div className='flex flex-col space-y-4 '>
						{addonsOptions.map((option) => (
							<label
								key={option.addon}
								className={`flex items-center justify-between border p-2 rounded-md ${
									values.addons.find((add: Addon) => add.addon === option.addon) !== undefined ? activeClass : ''
								}`}
							>
								<Field
									type='checkbox'
									name='options'
									value={option.addon}
									onChange={() => {
										if (values.addons.find((add: Addon) => add.addon === option.addon) !== undefined) {
											// If the option is already in the addons array, remove it.
											setFieldValue(
												'addons',
												values.addons.filter((add: Addon) => add.addon !== option.addon)
											);
										} else {
											// Otherwise, add it to the addons array.
											setFieldValue('addons', [
												...values.addons,
												{
													addon: option.addon,
													price: paymentType === 'monthly' ? option.price.monthly : option.price.yearly,
												},
											]);
										}
									}}
									checked={values.addons.find((add: Addon) => add.addon === option.addon) !== undefined}
								/>
								<div className='flex flex-col'>
									<p className='text-MarineBlue font-medium'>{option.addon}</p>
									<small className='text-CoolGray mb-1'>{option.msg}</small>
								</div>
								<small className='text-PastelBlue font-medium'>
									+${paymentType === 'monthly' ? `${option.price.monthly}/mo` : `${option.price.yearly}/yr`}
								</small>
							</label>
						))}
					</div>
					<SubmitButton text='Next Step' />
				</Form>
			)}
		</Formik>
	);
};
