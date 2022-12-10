import { Form, Formik } from 'formik';
import { useAddons } from '../hooks';
import { Header, SubmitButton, AddonOption } from '../components';

export const Addons = () => {
	const { addonsOptions, handleSubmit, headersData } = useAddons();

	return (
		<Formik
			initialValues={{
				addons: [],
			}}
			onSubmit={(values) => handleSubmit(values)}
		>
			{({ values, setFieldValue }) => (
				<Form className='formLayout'>
					<Header text={headersData.addons.text} title={headersData.addons.title} />
					<div className='flex flex-col space-y-4 '>
						{addonsOptions.map((option) => (
							<AddonOption option={option} setFieldValue={setFieldValue} values={values} key={option.addon} />
						))}
					</div>
					<SubmitButton text='Next Step' />
				</Form>
			)}
		</Formik>
	);
};
