import { useSelectPlan } from '../hooks';
import { Formik, Form } from 'formik';
import { Header, SubmitButton, PlanOption, SwitchToggler } from '../components';

export const SelectPlan = () => {
	const { nextStep, planOptions, initialValues, setSelected, selected, setSelectedOption } = useSelectPlan();
	return (
		<section className='formLayout'>
			<Header text='You have the option of monthly or yearly billing.' title='Select your plan' />
			<Formik initialValues={initialValues} onSubmit={(values) => nextStep(values)}>
				{({ values, setFieldValue }) => (
					<Form>
						<div className='flex flex-col space-y-3'>
							{planOptions.map((option, index) => (
								<PlanOption
									key={option.plan}
									index={index}
									option={option}
									setFieldValue={setFieldValue}
									selected={selected}
									values={values}
									setSelectedOption={setSelectedOption}
								/>
							))}
							<SwitchToggler setSelected={setSelected} values={values} />
							<SubmitButton text='Next Step' />
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
};
