import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { setUserInfo, useAppDispatch } from '../store';
import { Formik, Form } from 'formik';
import { UserInfo } from '../interfaces/interfaces';
import { Header, MyInput } from '../components';

export const UserInfoForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const initValues: UserInfo = {
		email: '',
		name: '',
		phone: '',
	};
	return (
		<Formik
			initialValues={initValues}
			validationSchema={Yup.object({
				name: Yup.string().min(2, 'Must be a valid name').required('This field is required'),
				email: Yup.string().email('Invalid email address').required('This field is required'),
				phone: Yup.string()
					.matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Invalid phone number')
					.required('This field is required'),
			})}
			onSubmit={(values) => {
				dispatch(setUserInfo(values));
				navigate('/selectPlan');
			}}
		>
			{({ errors }) => (
				<Form className='formLayout'>
					<Header text='Please provide your name, email address, and phone number.' title='Personal info' />
					<MyInput label='Name' name='name' placeholder='	e.g. Stephen King' errors={errors.name} />
					<MyInput label='Email' name='email' placeholder='	e.g. stephenking@lorem.com' errors={errors.email} />
					<MyInput label='Phone Number' name='phone' placeholder='	e.g. +1 234 567 890' errors={errors.phone} />
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
