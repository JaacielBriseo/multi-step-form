import { Formik, Form, Field } from 'formik';
import { planOptions } from '../constants/planOptions';
import { useState } from 'react';
import { useAppDispatch } from '../store/hookTypes';
import { setPaymentType, setSubscriptionPlan } from '../store';

export const SelectPlan = () => {
	const dispatch = useAppDispatch();
	const [selected, setSelected] = useState(null);
	const initialValues = {
		selectedOption: null,
		toggler: false,
	};
	let activeClass = 'bg-Magnolia border-MarineBlue';

	return (
		<div className='text-MarineBlue w-11/12 mx-auto rounded-md shadow-lg bg-White px-3 mt-5'>
			<div className='space-y-2 mb-4'>
				<h1 className='text-2xl font-bold'>Select your plan</h1>
				<p className='text-CoolGray text-sm'>You have the option of monthly or yearly billing.</p>
			</div>
			<Formik
				initialValues={initialValues}
				onSubmit={(values) => {
					console.log(values);
					dispatch(setSubscriptionPlan(values.selectedOption!));
					dispatch(setPaymentType(values.toggler ? 'yearly' : 'monthly'));
				}}
			>
				{({ values, setFieldValue }) => (
					<>
						<Form>
							<div className='flex flex-col space-y-3'>
								{planOptions.map((option, index: any) => (
									<button
										className={`border flex items-center space-x-3 p-3 rounded-md ${selected === index && activeClass}`}
										type='button'
										key={option.plan}
										onClick={() => {
											setSelected(index);
											if (values.selectedOption !== option.plan) {
												setFieldValue('selectedOption', {
													...option,
													price: values.toggler ? option.price.yearly : option.price.monthly,
												});
											}
										}}
									>
										<img src={option.icon} alt={option.plan} className='mb-5' />
										<div className='flex flex-col text-start'>
											<h2 className='font-medium'>{option.plan}</h2>
											<p className='text-CoolGray text-sm'>
												${values.toggler ? `${option.price.yearly}/yr` : `${option.price.monthly}/mo`}
												{values.toggler && <small className='block text-MarineBlue font-medium'> 2 months free</small>}
											</p>
										</div>
									</button>
								))}
								<label
									className='flex items-center justify-center space-x-3 bg-Magnolia h-9 rounded-md text-sm font-medium'
									onChange={() => setSelected(null)}
								>
									<p className={`${values.toggler ? 'text-CoolGray ' : ''}`}>Monthly</p>
									<Field type='checkbox' name='toggler' className='hidden' />
									<span className='toggle-switch inline-block bg-MarineBlue rounded-md cursor-pointer'>
										<span
											className='toggle-switch-slider bg-White rounded-md transition-colors duration-300 '
											style={{
												left: values.toggler ? '20px' : '0',
											}}
										/>
									</span>
									<p className={`${!values.toggler ? 'text-CoolGray' : ''}`}>Yearly</p>
								</label>
							</div>
							<button type='submit' disabled={selected === null}>
								Submit
							</button>
						</Form>
					</>
				)}
			</Formik>
		</div>
	);
};
