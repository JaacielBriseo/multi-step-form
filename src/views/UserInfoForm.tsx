import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { setUserInfo, useAppDispatch } from '../store';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
			onSubmit={(values) => {
				dispatch(setUserInfo(values));
				navigate('/select');
			}}
		>
			{({ errors }) => (
				<Form className='bg-White w-11/12 mx-auto rounded-lg p-5 shadow-lg text-MarineBlue'>
					<h1 className='text-xl font-bold'>Personal Info</h1>
					<p className='text-CoolGray'>Please provide your name, email address, and phone number.</p>
					<div className='flex flex-col m-1'>
						<div className='flex justify-between'>
							<label htmlFor='name'>Name</label>
							<ErrorMessage name='name' component='span' className='text-StrawberryRed' />
						</div>
						<Field
							name='name'
							type='text'
							className={`border-2 h-11 rounded-lg ${errors.name && 'border-StrawberryRed'} `}
							placeholder='	e.g. Stephen King'
						/>
					</div>

					<div className='flex flex-col m-1'>
						<div className='flex justify-between'>
							<label htmlFor='email'>Email</label>
							<ErrorMessage name='email' component='span' className='text-StrawberryRed' />
						</div>
						<Field
							name='email'
							type='email'
							className={`border-2 h-11 rounded-lg ${errors.email && 'border-StrawberryRed'} `}
							placeholder='	e.g. stephenking@lorem.com'
						/>
					</div>

					<div className='flex flex-col m-1'>
						<div className='flex justify-between'>
							<label htmlFor='phone'>Phone Number</label>
							<ErrorMessage name='phone' component='span' className='text-StrawberryRed' />
						</div>
						<Field
							name='phone'
							type='text'
							className={`border-2 h-11 rounded-lg ${errors.phone && 'border-StrawberryRed'} `}
							placeholder='	e.g. +1 234 567 890'
						/>
					</div>

					<div className='flex justify-end mt-20'>
						<button type='submit' className='w-24 h-9 p-1 bg-MarineBlue text-White rounded-md '>
							Next Step
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};
