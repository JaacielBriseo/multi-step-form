import { Formik, Form } from 'formik';
import { useUserInfo } from '../hooks';
import { headersData } from '../constants';
import { Header, MyInput, SubmitButton } from '../components';

export const UserInfoForm = () => {
	const { initValues, validationObject, nextStep } = useUserInfo();
	return (
		<Formik initialValues={initValues} validationSchema={validationObject} onSubmit={(values) => nextStep(values)}>
			{({ errors }) => (
				<Form className='formLayout md:space-y-8'>
					<Header text={headersData.userInfoForm.text} title={headersData.userInfoForm.title} />
					<MyInput label='Name' name='name' placeholder='	e.g. Stephen King' errors={errors.name} />
					<MyInput label='Email' name='email' placeholder='	e.g. stephenking@lorem.com' errors={errors.email} />
					<MyInput label='Phone Number' name='phone' placeholder='	e.g. +1 234 567 890' errors={errors.phone} />
					<SubmitButton text='Next Step' />
				</Form>
			)}
		</Formik>
	);
};
