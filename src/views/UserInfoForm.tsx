import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { setUserInfo, useAppDispatch } from '../store';

export const UserInfoForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				phone: '',
			}}
			validationSchema={Yup.object({
				name: Yup.string().min(2, 'Must be a valid name').required('Required'),
				email: Yup.string().email('Invalid email address').required('Required'),
				phone: Yup.string()
					.matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number')
					.required('Required'),
			})}
			onSubmit={(values, { setErrors }) => {
				dispatch(setUserInfo(values));
			}}
		>
			<Form className='bg-White w-11/12 mx-auto rounded-lg p-5 shadow-lg text-MarineBlue'>
				<h1 className='text-xl font-bold'>Personal Info</h1>
				<p className='text-CoolGray'>Please provide your name, email address, and phone number.</p>
				<div className='flex flex-col m-1'>
					<div className='flex justify-between'>
						<label htmlFor='name'>Name</label>
						<span className='text-StrawberryRed'>
							<ErrorMessage name='name' />
						</span>
					</div>
					<Field name='name' type='text' className='border-2 h-10' placeholder='	e.g. Stephen King' />
				</div>

				<div className='flex flex-col m-1'>
					<div className='flex justify-between'>
						<label htmlFor='email'>Email</label>
						<span className='text-StrawberryRed'>
							<ErrorMessage name='email' />
						</span>
					</div>
					<Field name='email' type='email' className='border-2 h-10' placeholder='	e.g. stephenking@lorem.com' />
				</div>

				<div className='flex flex-col m-1'>
					<div className='flex justify-between'>
						<label htmlFor='phone'>Phone Number</label>
						<span className='text-StrawberryRed'>
							<ErrorMessage name='phone' />
						</span>
					</div>
					<Field name='phone' type='text' className='border-2 h-10' placeholder='	e.g. +1 234 567 890' />
				</div>

				<div className='flex justify-end mt-20'>
					<button
						// onClick={() => navigate('/select')}
						type='submit'
						className='w-24 h-9 p-1 bg-MarineBlue text-White rounded-md '
					>
						Next Step
					</button>
				</div>
			</Form>
		</Formik>
	);
};
