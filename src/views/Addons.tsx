import { Field, Form, Formik } from 'formik';
import { setAddon } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hookTypes';
import { useNavigate } from 'react-router-dom';

export const Addons = () => {
	const { paymentType } = useAppSelector((state) => state.subscription);
	const addonsOptions = [
		{
			addon: 'Online service',
			msg: 'Access to multiplayer games',
			price: paymentType === 'monthly' ? 1 : 10,
		},
		{
			addon: 'Larger storage',
			msg: 'Extra 1TB of cloud save',
			price: paymentType === 'monthly' ? 2 : 20,
		},
		{
			addon: 'Customizable profile',
			msg: 'Custom theme on your profile',
			price: paymentType === 'monthly' ? 2 : 20,
		},
	];
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				addons: [
					{
						addon: null,
						price: null
					},
				],
			}}
			onSubmit={(values) => {
				console.log(values);
				dispatch(setAddon(values.addons))
				navigate('/summary');
			}}
		>
			{({ values, setFieldValue}) => (
				<Form className='text-MarineBlue w-11/12 mx-auto p-3 bg-White rounded-md flex flex-col shadow-lg'>
					<div className='flex flex-col space-y-4 mb-4'>
						<h1 className='text-2xl font-bold'>Pick add-ons</h1>
						<p className='text-CoolGray'>Add-ons help enhance your gaming experience.</p>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						{addonsOptions.map((option) => (
							<label
								key={option.addon}
								className='w-11/12 mx-auto border h-14 rounded-md flex justify-between items-center m-1'
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
									{option.addon}
									<small>{option.msg}</small>
								</div>
								<small className=''>{option.price}</small>
							</label>
						))}
					</div>
					<button onClick={() => navigate(-1)} type='button' className='fixed bottom-1 left-1'>
						Go back
					</button>
					<button type='submit' className='fixed bottom-1 right-1'>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};
