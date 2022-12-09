import { Field, Form, Formik } from 'formik';
import { setAddon } from '../store';
import { useAppDispatch } from '../store/hookTypes';
import { useNavigate } from 'react-router-dom';
import { useAddons } from '../hooks/useAddons';
import { useState } from 'react';

export const Addons = () => {
	const { addonsOptions, paymentType } = useAddons();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [selected, setSelected] = useState<number | null>(null);
	let activeClass = 'border-MarineBlue bg-Magnolia';
	return (
		<Formik
			initialValues={{
				addons: [
					{
						addon: null,
						price: null,
					},
				],
			}}
			onSubmit={(values) => {
				dispatch(setAddon(values.addons));
				navigate('/summary');
			}}
		>
			{({ values, setFieldValue, setFieldTouched, setFieldError }) => (
				<Form className='text-MarineBlue w-11/12 mx-auto p-3 bg-White rounded-md flex flex-col shadow-lg'>
					<div className='flex flex-col space-y-4 mb-4 '>
						<h1 className='text-2xl font-bold'>Pick add-ons</h1>
						<p className='text-CoolGray'>Add-ons help enhance your gaming experience.</p>
					</div>
					<div className='flex flex-col space-y-4'>
						{addonsOptions.map((option, index) => (
							<label
								onClick={() => setSelected(index)}
								key={option.addon}
								className={`flex items-center justify-between border p-2 rounded-md ${
									index === selected && activeClass
								}`}
							>
								<Field
									type='checkbox'
									name='options'
									value={option.addon}
									onChange={() => {
										setFieldValue('addons', [
											...values.addons,
											{
												addon: option.addon,
												price: option.price,
											},
										]);
									}}
									checked={values.addons.find((add) => add.addon === option.addon) !== undefined}
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
