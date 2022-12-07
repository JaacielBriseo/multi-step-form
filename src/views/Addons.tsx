import { Field, Form, Formik } from 'formik';
import { setAddon } from '../store';
import { useAppDispatch } from '../store/hookTypes';
import { useNavigate } from 'react-router-dom';

export const Addons = () => {
	const addonsOptions = [
		{
			addon: 'Online service',
			msg: 'Access to multiplayer games',
			extra: '+$1m/o',
		},
		{
			addon: 'Larger storage',
			msg: 'Extra 1TB of cloud save',
			extra: '+$2m/o',
		},
		{
			addon: 'Customizable profile',
			msg: 'Custom theme on your profile',
			extra: '+$2m/o',
		},
	];
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				options: '',
			}}
			onSubmit={(values) => {
				console.log(values.options);
				dispatch(setAddon(values.options));
        navigate('/summary')
			}}
		>
			{({ values }) => (
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
									checked={values.options.indexOf(option.addon) !== -1}
								/>
								<div className='flex flex-col'>
									{option.addon}
									<small>{option.msg}</small>
								</div>
								<small className=''>{option.extra}</small>
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
