import { Field, Form, Formik } from 'formik';
import { setAddon } from '../store';
import { useAppDispatch } from '../store/hookTypes';
import { useNavigate } from 'react-router-dom';
import { useAddons } from '../hooks/useAddons';
import { Addon } from '../interfaces';

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
				<Form className='text-MarineBlue w-11/12 mx-auto p-3 bg-White rounded-md flex flex-col shadow-lg '>
					<div className='flex flex-col space-y-4 mb-4 '>
						<h1 className='text-2xl font-bold'>Pick add-ons</h1>
						<p className='text-CoolGray'>Add-ons help enhance your gaming experience.</p>
					</div>
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
					<button onClick={() => navigate(-1)} type='button' className='absolute bottom-1 text-CoolGray font-medium'>
						Go back
					</button>
					<button type='submit' className='absolute bottom-1 right-2 text-White bg-MarineBlue px-4 h-10 rounded-md'>
						Next Step
					</button>
				</Form>
			)}
		</Formik>
	);
};
