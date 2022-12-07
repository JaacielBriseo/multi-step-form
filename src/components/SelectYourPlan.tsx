import { useAppSelector } from '../store/hookTypes';
import { Advanced, Arcade, Pro } from '../assets';
import { useState } from 'react';
interface PlanOption {
	plan: string;
	monthly: string;
	yearly: string;
	icon: string;
}
export const SelectYourPlan = () => {
	const { paymentType } = useAppSelector((state) => state.subscription);
	const [isSelected, setIsSelected] = useState<number | null>(null);

	let activeStyle = 'bg-gray-50 border-MarineBlue';
	const options: PlanOption[] = [
		{
			plan: 'Arcade',
			monthly: '9/mo',
			yearly: '90/yr',
			icon: Arcade,
		},
		{
			plan: 'Advanced',
			monthly: '12/mo',
			yearly: '120/yr',
			icon: Advanced,
		},
		{
			plan: 'Pro',
			monthly: '15/mo',
			yearly: '150/yr',
			icon: Pro,
		},
	];
	return (
		<div className='text-MarineBlue'>
			<div className='mb-5 space-y-3'>
				<h1 className='font-bold text-xl tracking-wide'>Select your plan </h1>
				<p className='text-CoolGray'>You have the option of monthly or yearly billing.</p>
			</div>
			<div className='flex flex-col justify-center items-center space-y-8'>
				{options.map((option, index) => {
					return (
						<button
							key={option.plan}
							name={option.plan}
							onClick={() => setIsSelected(index)}
							className={`flex w-full h-[4.5rem] items-center rounded-md space-x-3 border px-2 ${
								isSelected === index && activeStyle
							}`}
						>
							<img src={option.icon} alt='icon' />
							<div className='text-start'>
								<h2 className='font-semibold'>{option.plan}</h2>
								<small className='text-CoolGray'>{paymentType === 'monthly' ? option.monthly : option.yearly}</small>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
};
