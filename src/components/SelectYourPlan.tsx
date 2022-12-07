import { useSelectPlan } from '../hooks/useSelectPlan';
import { setSubscriptionPlan } from '../store';
export const SelectYourPlan = () => {
	const { activeStyle, dispatch, isSelected, options, paymentType, setIsSelected } = useSelectPlan();
	return (
		<div className='text-MarineBlue'>
			<div className='mb-5 space-y-3'>
				<h1 className='font-bold text-xl tracking-wide'>Select your plan </h1>
				<p className='text-CoolGray'>You have the option of monthly or yearly billing.</p>
			</div>
			<div className='flex flex-col justify-center items-center space-y-8'>
				{options.map((option, index:number) => {
					return (
						<button
							key={option.plan}
							onClick={() => {
								dispatch(setSubscriptionPlan(option.plan));
								setIsSelected(index);
							}}
							className={`flex w-full h-[4.5rem] items-center rounded-md space-x-3 border px-2 ${
								isSelected === index && activeStyle
							}`}
						>
							<img src={option.icon} alt='icon' />
							<div className='text-start flex flex-col'>
								<h2 className='font-semibold'>{option.plan}</h2>
								<small className='text-CoolGray'>{paymentType === 'monthly' ? option.monthly : option.yearly}</small>
								<small>{paymentType === 'yearly' && '2 months free'}</small>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
};
