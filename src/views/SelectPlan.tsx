import { Formik, Form, Field } from 'formik';
import { useAppDispatch, useAppSelector } from '../store/hookTypes';
import { setPaymentType } from '../store';
import { SelectYourPlan } from '../components/SelectYourPlan';

export const SelectPlan = () => {
	const dispatch = useAppDispatch();
	return (
		<Formik
			initialValues={{
				paymentOption: 'yearly',
			}}
			onSubmit={(values) => {
				console.log(values);
			}}
			validateOnChange
		>
			{({ setFieldValue }) => {
				return (
					<div className='flex flex-col mx-auto w-11/12 bg-White rounded-md p-6 text-MarineBlue'>
						<SelectYourPlan />
						<Form>
							<label htmlFor='paymentOption'>
								Payment option:
								<Field
									name='paymentOption'
									component='select'
									onChange={(e: any) => {
										setFieldValue('paymentOption', e.target.value);
										dispatch(setPaymentType(e.target.value));
									}}
								>
									<option value='yearly'>Yearly</option>
									<option value='monthly'>Monthly</option>
								</Field>
							</label>
						</Form>
					</div>
				);
			}}
		</Formik>
	);
};
