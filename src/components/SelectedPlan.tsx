import { NavLink } from 'react-router-dom';
import { SelectedPlanProps } from '../interfaces';

export const SelectedPlan = ({ plan, paymentType, price }: SelectedPlanProps) => {
	return (
		<div className='flex justify-between items-center'>
			<div>
				<h4 className='font-medium'>
					{plan}({paymentType})
				</h4>
				<NavLink to={'/selectPlan'} className='underline text-CoolGray text-sm'>
					Change
				</NavLink>
			</div>
			<p>
				${price}
				{paymentType === 'monthly' ? '/mo' : '/yr'}
			</p>
		</div>
	);
};
