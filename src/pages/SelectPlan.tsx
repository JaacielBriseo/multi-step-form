import { Formik, Form } from 'formik';
import { useSelectPlan } from '../hooks';
import { headersData } from '../constants';
import { Header, SubmitButton, PlanOption, SwitchToggler } from '../components';

export const SelectPlan = () => {
	const { nextStep, planOptions, initialValues, setSelected, selected, setSelectedOption } = useSelectPlan();
	return (
		<section className='formLayout'>
			<Header text={headersData.selectPlan.text} title={headersData.selectPlan.title} />
			<Formik initialValues={initialValues} onSubmit={(values) => nextStep(values)}>
				{({ values, setFieldValue }) => (
					<Form>
						<div className='flex flex-col space-y-3'>
							<div className='flex flex-col space-y-3 md:flex-row md:flex-wrap md:space-y-0 md:h-64 md:space-x-5'>
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
							</div>
							<SwitchToggler setSelected={setSelected} values={values} />
							<SubmitButton text='Next Step' customClass='lg:mr-44 lg:mt-10' />
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
};
