import { useSelectPlan } from '../hooks';
import { PlanOptionProps } from '../interfaces';

export const PlanOption = ({ index, option, values, setFieldValue, selected ,setSelectedOption}: PlanOptionProps) => {
	const {  activeClass } = useSelectPlan();

	return (
		<button
			className={`border flex items-center space-x-3 p-3 rounded-md md:flex-col md:justify-center md:px-7 ${selected === index && activeClass}`}
			type='button'
			key={option.plan}
			onClick={() => {
				setSelectedOption({ index, option, values, setFieldValue });
			}}
		>
			<img src={option.icon} alt={option.plan} className='mb-5' />
			<div className='flex flex-col text-start'>
				<h2 className='font-medium'>{option.plan}</h2>
				<p className='text-CoolGray text-sm'>
					${values.toggler ? `${option.price.yearly}/yr` : `${option.price.monthly}/mo`}
					{values.toggler && <small className='block text-MarineBlue font-medium'> 2 months free</small>}
				</p>
			</div>
		</button>
	);
};
