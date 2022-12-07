import { Formik, Form, Field } from 'formik';
import { useAppDispatch } from '../store/hookTypes';
import { setPaymentType } from '../store';
import { SelectYourPlan } from '../components/SelectYourPlan';
import { useNavigate } from 'react-router-dom';

export const SelectPlan = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				paymentOption: 'monthly',
			}}
			onSubmit={(values) => {
				dispatch(setPaymentType(values.paymentOption));
				navigate('/addons')
			}}
		>
			{({ values, setFieldValue }) => {
				return (
					<div className='flex flex-col mx-auto w-11/12 bg-White rounded-md p-6 text-MarineBlue'>
						<SelectYourPlan />
						<Form>
							<Field
								type='radio'
								id={values.paymentOption}
								value='yearly'
								onChange={() => {
									setFieldValue('paymentOption', 'yearly');
									dispatch(setPaymentType('yearly'));
								}}
								checked={values.paymentOption === 'yearly'}
							/>
							<span className='ml-4 text-xs font-medium tracking-wider text-gray-600 uppercase'>Yearly</span>
							<Field
								type='radio'
								value='monthly'
								id={values.paymentOption}
								onChange={() => {
									setFieldValue('paymentOption', 'monthly');
									dispatch(setPaymentType('monthly'));
								}}
								checked={values.paymentOption === 'monthly'}
							/>
							<span className='ml-4 text-xs font-medium tracking-wider text-gray-600 uppercase'>Monthly</span>
							<button className='absolute bottom-0 right-1' type='submit'>
								Submit
							</button>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};
