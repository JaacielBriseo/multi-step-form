import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const UserInfoForm = () => {
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
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			<Form className='flex flex-col md:flex-row md:justify-between'>
				<div className='md:w-1/3'>
					<label htmlFor='name' className='block text-sm font-medium leading-5 text-gray-700'>
						Name
					</label>
					<Field name='name' type='text' className='mt-1 form-input rounded-md shadow-sm' />
					<span className='text-red-700'>
						<ErrorMessage name='name' />
					</span>
				</div>

				<div className='md:w-1/3'>
					<label htmlFor='email' className='block text-sm font-medium leading-5 text-gray-700'>
						Email
					</label>
					<Field name='email' type='email' className='mt-1 form-input rounded-md shadow-sm' />
					<ErrorMessage name='email' />
				</div>

				<div className='md:w-1/3'>
					<label htmlFor='phone' className='block text-sm font-medium leading-5 text-gray-700'>
						Phone Number
					</label>
					<Field name='phone' type='text' className='mt-1 form-input rounded-md shadow-sm' />
					<ErrorMessage name='phone' />
				</div>

				<button type='submit' className='mt-4 rounded-md bg-red-500 self-baseline'>
					Sign Up
				</button>
			</Form>
		</Formik>
	);
};
